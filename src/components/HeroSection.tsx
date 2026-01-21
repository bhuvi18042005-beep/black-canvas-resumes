import profilePhoto from "@/assets/profile-photo.png";
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo with enhanced effects */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl scale-125 animate-pulse-gold" />
              <div className="photo-frame rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80">
                <img
                  src={profilePhoto}
                  alt="Sanku Bhuvanesh"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
              B.Tech Computer Science • AI & ML
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
              Sanku{" "}
              <span className="text-gradient-gold glow-text">Bhuvanesh</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 animate-fade-up delay-200">
              Specializing in Artificial Intelligence and Machine Learning, with strong foundations in 
              Java-based application development, databases, and data-driven problem solving.
            </p>

            {/* Contact Info with glass effect */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-up delay-300">
              <a
                href="mailto:sankubhuvanesh@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm hover-glow"
              >
                <Mail className="w-4 h-4" />
                <span>sankubhuvanesh@gmail.com</span>
              </a>
              <a
                href="tel:+919346035073"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm hover-glow"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9346035073</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up delay-400">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Kadiri, Andhra Pradesh, India
              </span>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors underline-animation"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors underline-animation"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
          <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 scroll-indicator" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
