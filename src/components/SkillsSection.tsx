import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 75 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const techIcons = [
  'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Git',
  'Docker', 'PostgreSQL', 'MongoDB', 'AWS', 'Tailwind', 'Next.js'
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-mono text-primary text-sm">// Skills & Technologies</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        {/* Tech Icons Marquee */}
        <div className="mb-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-xl font-mono text-sm hover:border-primary/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground glow-effect'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
