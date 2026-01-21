import { Award, Trophy, Code } from "lucide-react";

const certifications = [
  { name: "Java Foundations", issuer: "Oracle" },
  { name: "DBMS & DAA", issuer: "CodeChef" },
  { name: "Soft Skills Development", issuer: "NPTEL" },
];

const achievements = [
  { icon: Code, text: "Solved 1000+ coding problems on CodeChef" },
  { icon: Trophy, text: "Achieved Gold Badge on CodeChef" },
  { icon: Award, text: "2nd Prize – Research Paper Presentation" },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 relative" id="certifications">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-gradient-gold">Certifications</span>
            </h2>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="card-elevated rounded-xl p-5 hover-lift animate-fade-up flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-gradient-gold">Achievements</span>
            </h2>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.text}
                  className="card-elevated rounded-xl p-5 hover-lift animate-fade-up flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium">{achievement.text}</p>
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
