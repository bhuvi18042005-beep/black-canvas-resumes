import { 
  Cpu, 
  Brain, 
  Code2, 
  Gamepad2, 
  BookOpen, 
  Music,
  Camera,
  Globe
} from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Exploring neural networks, deep learning, and intelligent systems",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Code2,
    title: "Competitive Coding",
    description: "Solving algorithmic challenges and improving problem-solving skills",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Building predictive models and working with data-driven solutions",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and expanding knowledge",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Strategic and puzzle games that challenge the mind",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and learning from the developer community",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const InterestsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="interests">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient-gold glow-text">Interests</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Passionate about technology, learning, and creating meaningful solutions
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className="interest-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <interest.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${interest.gradient} opacity-10 transform rotate-45 translate-x-10 -translate-y-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
