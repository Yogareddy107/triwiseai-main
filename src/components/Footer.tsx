import { Instagram, Linkedin, Heart } from "lucide-react";
import triwiseLogo from "@/assets/triwise-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 mt-20">
      {/* Glass background with gradient */}
      <div className="absolute inset-0 glass"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={triwiseLogo} 
            alt="TriWise.ai Logo" 
            className="mx-auto h-16 object-contain opacity-80"
          />
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            {/* Instagram */}
            <a
              href="https://instagram.com/triwise.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 glass p-4 rounded-xl hover:scale-105 transition-all duration-300 glow"
            >
              <Instagram className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">📸 Instagram</div>
                <div className="text-foreground font-medium">@triwise.ai</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/intrasphere"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 glass p-4 rounded-xl hover:scale-105 transition-all duration-300 glow"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">💼 LinkedIn</div>
                <div className="text-foreground font-medium">Team IntraSphere</div>
              </div>
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-lg md:text-xl text-primary font-semibold mb-2">
            TriWise.ai – One AI. Health. Career. Education.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-accent mx-1 animate-pulse" /> by the IntraSphere team
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-glass-border">
          <p className="text-sm text-muted-foreground">
            © 2025 IntraSphere. All rights reserved.
          </p>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;