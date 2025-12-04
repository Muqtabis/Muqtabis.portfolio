import { Github, Linkedin, Mail, Twitter, Heart, Terminal } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold font-mono">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="text-gradient">&lt;Dev /&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-center">
              Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using React & Tailwind
            </p>
            <p className="mt-2">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &lt; Back to top /&gt;
          </a>
        </div>
      </div>
    </footer>
  );
}
