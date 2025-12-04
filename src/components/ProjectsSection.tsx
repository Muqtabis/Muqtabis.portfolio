import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and a responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Project Two',
    description: 'Machine learning model for image classification using TensorFlow. Achieved 95% accuracy on the test dataset.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Project Three',
    description: 'Mobile-first e-commerce platform with payment integration and inventory management.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'CLI Tool',
    description: 'Command-line tool for automating development workflows.',
    tags: ['Go', 'Cobra'],
    github: '#',
  },
  {
    title: 'API Service',
    description: 'RESTful API service with comprehensive documentation.',
    tags: ['Express', 'Swagger'],
    github: '#',
  },
  {
    title: 'Chrome Extension',
    description: 'Browser extension for productivity enhancement.',
    tags: ['JavaScript', 'Chrome API'],
    github: '#',
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-mono text-primary text-sm">// Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-border">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                      <Folder className="h-20 w-20 text-primary/30" />
                    </div>
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
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-first' : ''} animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
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
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold">Other Noteworthy Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-xl hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
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
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            <Github className="h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
