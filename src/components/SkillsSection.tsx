import { Code2, Database, Globe, Wrench, Brain, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Java", "SQL"],
  },
  {
    icon: Globe,
    title: "Frontend Technologies",
    skills: ["HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "JDBC"],
  },
  {
    icon: Brain,
    title: "Soft Skills",
    skills: ["Critical Thinking", "Problem Solving", "Communication"],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English", "Telugu"],
  },
];

const cardStyles = [
  "neon-box",
  "holo-card", 
  "cyber-box",
  "morph-border",
  "neumorphic",
  "liquid-border",
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 animate-fade-up">What I Know</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 animate-fade-up delay-100">
            Technical <span className="text-gradient-gold glow-text">Skills</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${cardStyles[index]} rounded-2xl p-7 hover-lift animate-fade-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
