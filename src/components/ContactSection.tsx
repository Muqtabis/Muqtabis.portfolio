import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mpwvlwby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'muqtabis.gbr@gmail.com', href: 'mailto:muqtabis.gbr@gmail.com' },
    { icon: MapPin, title: 'Location', value: 'Bengaluru, India' },
    { icon: Phone, title: 'Phone', value: '+91 8431039329' },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-primary text-sm">// Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={item.title}
                className={`glass-card p-6 rounded-xl hover-lift transition-all duration-500 ${
                  infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Terminal style message */}
            <div 
              className={`code-block transition-all duration-500 ${
                infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-sm">
                <span className="text-muted-foreground">$</span>{' '}
                <span className="text-primary">npm</span> run contact
                <br />
                <span className="text-green-500">✓</span> Ready to collaborate!
                <br />
                <span className="text-green-500">✓</span> Open for opportunities
                <br />
                <span className="text-muted-foreground">$</span>{' '}
                <span className="terminal-cursor"></span>
              </code>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi! I'd like to discuss..."
                  rows={5}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
