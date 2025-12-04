import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    name: 'Web Stack',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'REST API', level: 90 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vite', level: 85 },
      { name: 'Cloudinary', level: 75 },
    ],
  },
];

const techIcons = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'C++',
  'Java', 'Git', 'REST API', 'Vite', 'Cloudinary', 'HTML/CSS'
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
        <div 
          ref={tabsRef}
          className={`flex justify-center gap-4 mb-12 flex-wrap transition-all duration-700 ${
            tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
        <div 
          ref={skillsRef}
          className="max-w-3xl mx-auto space-y-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`space-y-2 transition-all duration-500 ${
                skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: skillsVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 200}ms`
                  }}
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
