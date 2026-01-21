import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    tech: ["Java", "JDBC", "SQL"],
    description: "Developed a database-driven student management system managing records for 1,000+ students. Implemented CRUD operations with JDBC and MySQL. Optimized database schema, reducing redundancy by 15%.",
  },
  {
    title: "AI-Driven Sign and Voice Translation Framework",
    tech: ["Python", "TensorFlow", "Django"],
    description: "Implemented CNN-based gesture recognition achieving 92% accuracy. Built a Django web interface for real-time translation.",
  },
  {
    title: "URL Phishing & Email Spam Detection",
    tech: ["Python", "scikit-learn", "Flask"],
    description: "Designed a phishing detection pipeline using ML classification models. Integrated REST API for scalable deployment.",
  },
];

const projectGradients = [
  "from-amber-500/20 to-orange-600/20",
  "from-cyan-500/20 to-blue-600/20",
  "from-emerald-500/20 to-teal-600/20",
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 animate-fade-up">My Work</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 animate-fade-up delay-100">
            Featured <span className="text-gradient-gold glow-text">Projects</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-3d spotlight-card rounded-2xl p-8 group animate-fade-up border border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/20">
                    <Folder className="w-8 h-8 text-primary" />
                  </div>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label="View source code"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
