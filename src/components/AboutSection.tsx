import { Code2, GraduationCap, MapPin, Calendar } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-mono text-primary text-sm">// About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block Style About */}
          <div className="code-block animate-slide-in-left">
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
                <span className="text-accent-foreground">"Your Name"</span>,
                {'\n'}  <span className="text-muted-foreground">title:</span>{' '}
                <span className="text-accent-foreground">"Software Engineer"</span>,
                {'\n'}  <span className="text-muted-foreground">education:</span>{' '}
                <span className="text-accent-foreground">"B.S. Computer Science"</span>,
                {'\n'}  <span className="text-muted-foreground">location:</span>{' '}
                <span className="text-accent-foreground">"Your City, Country"</span>,
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
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Computer Science student with a love for creating elegant, 
              efficient, and user-friendly applications. Currently exploring the realms of 
              full-stack development, cloud computing, and artificial intelligence.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl hover-lift">
                <Code2 className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold">Developer</h4>
                <p className="text-sm text-muted-foreground">3+ years coding</p>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift">
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold">Student</h4>
                <p className="text-sm text-muted-foreground">CS Major</p>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift">
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground">Your City</p>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-semibold">Graduating</h4>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
