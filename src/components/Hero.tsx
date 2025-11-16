import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";

const Hero = () => {
  const scrollToPrediction = () => {
    const element = document.getElementById("predict");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-water pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-64 h-64 rounded-full border-2 border-primary/20 animate-ripple" />
        <div className="absolute w-64 h-64 rounded-full border-2 border-primary/20 animate-ripple" style={{ animationDelay: "1s" }} />
        <div className="absolute w-64 h-64 rounded-full border-2 border-primary/20 animate-ripple" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-up">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm">
          <Droplets className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          AquaCheck
          <span className="block text-3xl md:text-5xl mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Smart Water Quality Predictor
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto">
          Analyze. Predict. Protect your water.
        </p>
        
        <Button 
          size="lg"
          onClick={scrollToPrediction}
          className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
        >
          Check Water Quality
        </Button>
      </div>
    </section>
  );
};

export default Hero;
