import { Award, Trophy, Code, Star, Sparkles } from "lucide-react";

const certifications = [
  { name: "Java Foundations", issuer: "Oracle", color: "from-red-500 to-orange-500" },
  { name: "DBMS & DAA", issuer: "CodeChef", color: "from-amber-500 to-yellow-500" },
  { name: "Soft Skills Development", issuer: "NPTEL", color: "from-blue-500 to-cyan-500" },
];

const achievements = [
  { icon: Code, text: "Solved 1000+ coding problems on CodeChef", stat: "1000+" },
  { icon: Trophy, text: "Achieved Gold Badge on CodeChef", stat: "Gold" },
  { icon: Award, text: "2nd Prize – Research Paper Presentation", stat: "2nd" },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="certifications">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                <span className="text-gradient-gold glow-text">Certifications</span>
              </h2>
            </div>
            
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="glitch-box rounded-2xl p-6 hover-lift animate-fade-up group border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fade-up delay-200">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                <span className="text-gradient-gold glow-text">Achievements</span>
              </h2>
            </div>
            
            <div className="space-y-5">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.text}
                  className="pulse-ring morph-border rounded-2xl p-6 hover-lift animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 border border-primary/30">
                      <achievement.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium group-hover:text-primary transition-colors">{achievement.text}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-display font-bold text-gradient-gold">{achievement.stat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
