import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Education</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated rounded-2xl p-8 hover-lift animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold mb-2">
                  Kalasalingam Academy of Research and Education
                </h3>
                <p className="text-primary font-medium text-lg mb-4">
                  B.Tech in Computer Science (AI & ML)
                </p>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    2022 – 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Tamil Nadu
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">CGPA: 8.72</span>
                  </span>
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
