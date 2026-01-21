import { Briefcase, Calendar, MapPin, CheckCircle2, Zap } from "lucide-react";

const experiences = [
  "Designed and developed multiple academic projects involving Java, databases, and machine learning models",
  "Applied software development lifecycle principles including requirement analysis, implementation, and testing",
  "Collaborated on version-controlled projects using Git and GitHub",
];

const ExperienceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 animate-fade-up">My Journey</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 animate-fade-up delay-100">
            Work <span className="text-gradient-gold glow-text">Experience</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-10">
            {/* Animated timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="relative animate-fade-up">
              {/* Pulsing timeline dot */}
              <div className="absolute -left-[21px] top-3">
                <div className="w-5 h-5 rounded-full bg-primary animate-pulse-gold" />
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/50 animate-ping" />
              </div>
              
              <div className="neumorphic spotlight-card rounded-3xl p-8 lg:p-10 ml-4 group border border-border/30">
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">Current</span>
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold group-hover:text-primary transition-colors">
                        Academic Project Experience
                      </h3>
                      <p className="text-primary font-medium text-lg mt-1">
                        Software & Machine Learning Projects
                      </p>
                    </div>
                  </div>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="cyber-box px-5 py-3 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">2022 – Present</span>
                    </div>
                    <div className="cyber-box px-5 py-3 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">India</span>
                    </div>
                  </div>

                  {/* Experience points */}
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                          {exp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
