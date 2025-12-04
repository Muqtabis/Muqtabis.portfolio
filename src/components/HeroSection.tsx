import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Software Engineer', 'Full Stack Developer', 'CS Student', 'Problem Solver'];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20" style={{ background: 'var(--gradient-hero)' }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-2">
              <p className="font-mono text-primary text-sm md:text-base">
                &gt; Hello World! I am
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Your</span>
                <br />
                <span className="text-gradient">Name Here</span>
              </h1>
            </div>

            <div className="h-8 font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-primary">const</span> role = "
              <span className="text-foreground">{displayText}</span>
              <span className="terminal-cursor"></span>"
            </div>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              A passionate computer science student crafting elegant solutions to complex problems. 
              I love building scalable applications and exploring cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up stagger-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full opacity-20"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glass-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-primary/40">?</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-10 glass-card px-4 py-2 rounded-lg animate-float">
                <span className="font-mono text-sm text-primary">&lt;/&gt;</span>
              </div>
              <div className="absolute -left-4 bottom-20 glass-card px-4 py-2 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-mono text-sm text-primary">{ }</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
