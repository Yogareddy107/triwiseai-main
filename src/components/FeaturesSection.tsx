import { useEffect, useState } from "react";
import { Heart, Briefcase, BookOpen, Globe } from "lucide-react";

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features = [
    {
      icon: Heart,
      title: "AI Health Assistant",
      emoji: "🩺",
      description: "Track lifestyle, suggest health routines, mental fitness insights.",
      details: "Smart wellness monitoring with personalized recommendations for optimal health and productivity."
    },
    {
      icon: Briefcase,
      title: "Career Compass",
      emoji: "💼",
      description: "AI-driven job match, resume optimization, interview prep.",
      details: "Navigate your professional journey with intelligent career guidance and market insights."
    },
    {
      icon: BookOpen,
      title: "EduMentor",
      emoji: "🎓",
      description: "Personalized study planner, course suggestions, skill-building roadmap.",
      details: "Accelerate your learning with AI-powered educational strategies and adaptive content."
    },
    {
      icon: Globe,
      title: "Cross-Domain Intelligence",
      emoji: "🌐",
      description: "Health habits → Career productivity → Smarter learning cycle.",
      details: "Experience the synergy of interconnected AI that learns from all aspects of your life."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Powerful <span className="text-primary glow">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Scroll to discover what makes TriWise.ai revolutionary
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.title}
                data-index={index}
                className={`feature-card flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                } transition-all duration-700`}
              >
                {/* Feature Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <span className="text-4xl mr-3">{feature.emoji}</span>
                    <div className="p-3 bg-gradient-card rounded-xl glow">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-primary mb-4 font-semibold">
                    {feature.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {/* Feature Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="glass p-8 rounded-3xl w-full max-w-md aspect-square flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
                      <div className="text-6xl opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {feature.emoji}
                      </div>
                    </div>
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl border border-primary/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;