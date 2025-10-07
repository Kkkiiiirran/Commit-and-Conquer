import { GraduationCap, Users, Briefcase, Network } from "lucide-react";
import { Card } from "./ui/card";

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Gain hands-on coding experience with real-world projects and cutting-edge technologies",
    color: "from-primary to-primary/50"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work alongside talented developers from around the globe and build lasting connections",
    color: "from-secondary to-secondary/50"
  },
  {
    icon: Briefcase,
    title: "Growth",
    description: "Build an impressive portfolio that showcases your skills to potential employers",
    color: "from-accent to-accent/50"
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with industry mentors and peers who share your passion for technology",
    color: "from-primary via-secondary to-accent"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Join Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Community?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock incredible opportunities and accelerate your developer journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-full w-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
