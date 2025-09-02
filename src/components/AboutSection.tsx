import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import intrasphereLogo from "@/assets/intrasphere-logo.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Heading with Icon */}
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mr-4">
              Built by
            </h2>
            <div className="flex items-center glass p-4 rounded-2xl glow">
              <img 
                src={intrasphereLogo} 
                alt="IntraSphere Logo" 
                className="h-8 w-8 mr-3 object-contain"
              />
              <span className="text-2xl md:text-3xl font-bold text-primary">
                IntraSphere
              </span>
            </div>
            <Rocket className="w-8 h-8 text-accent ml-4 animate-float" />
          </div>

          {/* Description */}
          <div className="glass p-8 md:p-12 rounded-3xl max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="text-primary font-semibold">TriWise.ai</span> is being developed by{" "}
              <span className="text-accent font-semibold">IntraSphere</span>, an ambitious startup on a mission to merge AI with real-world impact.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We're taking <span className="text-primary">baby steps</span> now — but building for a{" "}
              <span className="text-accent glow font-semibold">giant leap forward</span>.
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center mt-8 space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 p-6 glass rounded-2xl border border-glass-border">
            <p className="text-sm md:text-base text-muted-foreground italic">
              "Empowering individuals through intelligent technology that understands the interconnected nature of health, career, and education."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;