import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8">
            <div className="timeline-line" />
            
            <div className="relative animate-fade-up">
              <div className="timeline-dot absolute -left-[7px] top-2" />
              
              <div className="card-elevated rounded-2xl p-8 ml-6 hover-lift">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      Academic Project Experience
                    </h3>
                    <p className="text-primary font-medium">
                      Software & Machine Learning Projects
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    2022 – Present
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    India
                  </span>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Designed and developed multiple academic projects involving Java, databases, and machine learning models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Applied software development lifecycle principles including requirement analysis, implementation, and testing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Collaborated on version-controlled projects using Git and GitHub
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
