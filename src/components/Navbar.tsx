import { Droplets } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">AquaCheck</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("predict")} className="text-foreground hover:text-primary transition-colors">
              Predict
            </button>
            <button onClick={() => scrollToSection("dashboard")} className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </button>
            <button onClick={() => scrollToSection("ai-report")} className="text-foreground hover:text-primary transition-colors">
              AI Report
            </button>
            {/* <button onClick={() => scrollToSection("footer")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-up">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("predict")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Predict
            </button>
            <button onClick={() => scrollToSection("dashboard")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Dashboard
            </button>
            <button onClick={() => scrollToSection("ai-report")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              AI Report
            </button>
            {/* <button onClick={() => scrollToSection("footer")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
