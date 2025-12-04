import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer Intern',
    company: 'Tech Company',
    period: 'May 2024 - Aug 2024',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver new features.',
    skills: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University Name',
    period: '2021 - 2025',
    description: 'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning.',
    skills: ['GPA: 3.8/4.0'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'Startup Inc.',
    period: 'Jan 2023 - May 2024',
    description: 'Built responsive web interfaces and implemented REST APIs. Participated in code reviews and agile ceremonies.',
    skills: ['TypeScript', 'Vue.js', 'MongoDB'],
  },
  {
    type: 'work',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2022 - Present',
    description: 'Designed and developed custom websites for small businesses. Managed client relationships and project timelines.',
    skills: ['WordPress', 'React', 'Figma'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-mono text-primary text-sm">// Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I've <span className="text-gradient">Been</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } animate-fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-2 bg-accent rounded-lg">
                      {exp.type === 'work' ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
