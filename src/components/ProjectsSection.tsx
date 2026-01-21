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

const ProjectsSection = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated rounded-2xl p-8 hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-7 h-7 text-primary" />
                </div>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
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

export default ProjectsSection;
