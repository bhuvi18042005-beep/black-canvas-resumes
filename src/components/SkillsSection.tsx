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

const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-elevated rounded-2xl p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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
