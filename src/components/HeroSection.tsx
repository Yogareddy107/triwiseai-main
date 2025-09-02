import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import aiAnimation from "@/assets/ai-animation.png";
import triwiseLogo from "@/assets/triwise-logo.png";

const HeroSection = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 4}s`,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="particles">
        {createParticles()}
      </div>

      {/* Gradient Glow Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={triwiseLogo} 
              alt="TriWise.ai Logo" 
              className="mx-auto h-24 md:h-32 object-contain"
            />
          </div>

          {/* Main Heading with Typing Effect */}
          <div className="mb-6">
            {showTyping && (
              <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-foreground typing-animation border-r-4 border-accent inline-block mb-2">
                  🚀 Launching Soon..
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground animate-fade-in">
                  Under Development 🧑‍💻
                </p>
              </div>
            )}
          </div>

          {/* Subline */}
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-12 animate-slide-up">
            One AI Platform. <span className="text-primary glow">Health</span>. <span className="text-primary glow">Career</span>. <span className="text-primary glow">Education</span>.
          </p>

          {/* 3D AI Animation */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src={aiAnimation} 
                alt="AI Animation" 
                className="w-48 md:w-64 lg:w-80 h-auto object-contain glow animate-float"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up mb-8">
          <Button 
            variant="glass"
            size="lg"
            className="glow text-lg md:text-xl px-8 py-4"
          >
            Stay Connected | Join Our Journey
          </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in">
            <div className="flex flex-col items-center text-muted-foreground">
              <p className="text-sm mb-2">Discover More</p>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;