import { useEffect, useState } from "react";
import { Check, Brain, Compass, GraduationCap, Network, Sparkles } from "lucide-react";

const WhyChooseSection = () => {
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

    const section = document.getElementById("why-choose");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "Personalized AI Guidance",
      description: "Tailored recommendations for your unique journey"
    },
    {
      icon: Compass,
      title: "Real-time Career Roadmaps",
      description: "Dynamic pathways that adapt to market trends"
    },
    {
      icon: Sparkles,
      title: "Health Insights & Recommendations",
      description: "Holistic wellness tracking and smart suggestions"
    },
    {
      icon: GraduationCap,
      title: "Smart Learning & Skill Growth",
      description: "Accelerated learning with AI-powered techniques"
    },
    {
      icon: Network,
      title: "Seamless Multi-Domain Integration",
      description: "Connected ecosystem across all life aspects"
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary glow">TriWise.ai</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Because we believe in simplifying lives. <span className="text-primary">TriWise.ai</span> is not just another AI tool — 
            it's a <span className="text-accent">unified platform</span> bringing Health, Career, and Education under one AI-powered roof. 
            Designed to guide, support, and empower you in every step of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className={`glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-card rounded-xl glow mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;