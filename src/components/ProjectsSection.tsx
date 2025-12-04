import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import theageEduThumbnail from '@/assets/theage-edu-thumbnail.png';
import dreamJournalThumbnail from '@/assets/dream-journal-thumbnail.png';

const projects = [
  {
    title: 'TheAge.Edu',
    description: 'A comprehensive educational platform featuring a secure Admin Dashboard for managing student records, faculty directories, and academic results. Includes a custom CMS for real-time updates of school news, events, and galleries, with robust authentication securing sensitive institutional data.',
    tags: ['Node.js', 'React+Vite', 'Express.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Muqtabis/theage.edu',
    live: '#',
    featured: true,
    period: '08 2025 – 11 2025',
    thumbnail: theageEduThumbnail,
  },
  {
    title: 'Dream.journal',
    description: 'A data-driven dream journaling platform with a full-stack solution enabling users to securely record, store, and retrieve personal dream entries via a RESTful API. Features a dynamic Analytics Dashboard that visualizes "Dream Probability" and historical trends with graphical insights.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Muqtabis/my-dream-journal',
    live: '#',
    featured: true,
    period: '05 2025 – 10 2025',
    thumbnail: dreamJournalThumbnail,
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-primary text-sm">// Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Muqtabis" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


function FeaturedProject({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Project Image Placeholder */}
      <div 
        className={`transition-all duration-700 delay-100 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
        } ${!isEven ? 'lg:order-last' : ''}`}
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-border">
            <img 
              src={project.thumbnail} 
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a href={project.github} className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              {project.live && (
                <a href={project.live} className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div 
        className={`space-y-4 transition-all duration-700 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isEven ? 'translate-x-12' : '-translate-x-12'}`
        }`}
      >
        <span className="font-mono text-primary text-sm">Featured Project</span>
        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
        <div className="glass-card p-6 rounded-xl">
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          {project.live && (
            <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
