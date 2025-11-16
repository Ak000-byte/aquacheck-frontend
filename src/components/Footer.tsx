import { Droplets, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="footer" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">AquaCheck</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced AI-powered water quality prediction for safer communities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("hero")} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection("predict")} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Predict
              </button>
              <button onClick={() => scrollToSection("dashboard")} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Dashboard
              </button>
              <button onClick={() => scrollToSection("ai-report")} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                AI Report
              </button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                API Reference
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Support
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@aquacheck.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Water St, Clean City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AquaCheck. All rights reserved. Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
