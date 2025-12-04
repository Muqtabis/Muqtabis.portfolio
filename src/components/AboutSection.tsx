import { Code2, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: codeRef, isVisible: codeVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-primary text-sm">// About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block Style About */}
          <div 
            ref={codeRef}
            className={`code-block transition-all duration-700 delay-100 ${
              codeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-muted-foreground text-xs">about.ts</span>
            </div>
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-primary">const</span>{' '}
                <span className="text-foreground">developer</span> = {'{'}
                {'\n'}  <span className="text-muted-foreground">name:</span>{' '}
                <span className="text-accent-foreground">"Muqtabis Ahmar"</span>,
                {'\n'}  <span className="text-muted-foreground">title:</span>{' '}
                <span className="text-accent-foreground">"Software Engineer"</span>,
                {'\n'}  <span className="text-muted-foreground">education:</span>{' '}
                <span className="text-accent-foreground">"B.E. Computer Science"</span>,
                {'\n'}  <span className="text-muted-foreground">location:</span>{' '}
                <span className="text-accent-foreground">"Bengaluru, India"</span>,
                {'\n'}  <span className="text-muted-foreground">interests:</span> [
                {'\n'}    <span className="text-accent-foreground">"Web Development"</span>,
                {'\n'}    <span className="text-accent-foreground">"Machine Learning"</span>,
                {'\n'}    <span className="text-accent-foreground">"Open Source"</span>
                {'\n'}  ],
                {'\n'}  <span className="text-muted-foreground">available:</span>{' '}
                <span className="text-green-500">true</span>
                {'\n'}{'}'};
              </code>
            </pre>
          </div>

          {/* Info Cards */}
          <div 
            ref={infoRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Final-year Bachelor of Engineering student in Computer Science and Design, equipped with 
              strong skills in web development, software design, and database management. I leverage my 
              technical expertise in modern frameworks to build innovative, scalable solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: 'Developer', subtitle: 'Software Engineer' },
                { icon: GraduationCap, title: 'Student', subtitle: 'B.E. CS' },
                { icon: MapPin, title: 'Location', subtitle: 'Bengaluru, India' },
                { icon: Calendar, title: 'Graduating', subtitle: '2026' },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="glass-card p-4 rounded-xl hover-lift transition-all duration-500"
                  style={{ transitionDelay: `${300 + index * 100}ms`, opacity: infoVisible ? 1 : 0, transform: infoVisible ? 'translateY(0)' : 'translateY(20px)' }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
