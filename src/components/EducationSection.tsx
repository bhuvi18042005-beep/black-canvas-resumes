import { GraduationCap, Calendar, MapPin, Award, BookOpen, Target } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="education">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 animate-fade-up">Academic Background</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 animate-fade-up delay-100">
            <span className="text-gradient-gold glow-text">Education</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="holo-card liquid-border rounded-3xl p-10 animate-fade-up group">
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Icon */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <GraduationCap className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Kalasalingam Academy of Research and Education
                  </h3>
                  <p className="text-primary font-medium text-xl mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    B.Tech in Computer Science (AI & ML)
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="neon-box rounded-xl px-5 py-3 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold">2022 – 2026</p>
                      </div>
                    </div>
                    <div className="neon-box rounded-xl px-5 py-3 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-semibold">Tamil Nadu</p>
                      </div>
                    </div>
                    <div className="neon-box rounded-xl px-5 py-3 flex items-center gap-3 bg-primary/5 border-primary/30">
                      <Award className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Performance</p>
                        <p className="font-bold text-gradient-gold text-lg">CGPA: 8.72</p>
                      </div>
                    </div>
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

export default EducationSection;
