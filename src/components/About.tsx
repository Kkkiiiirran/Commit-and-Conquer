import { Code2, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block p-3 bg-primary/10 rounded-2xl">
              <Code2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              What is{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Open Source?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open source is more than just code—it's a philosophy of collaboration, 
              transparency, and collective innovation. It's where developers from around 
              the world come together to build, improve, and share software that's freely 
              accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By participating in open source, you're not just writing code; you're contributing 
              to a global movement that democratizes technology and empowers creators everywhere.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl backdrop-blur-sm border border-primary/20 animate-slide-in-right">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Built by passionate developers who believe in sharing knowledge
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 rounded-2xl backdrop-blur-sm border border-secondary/20 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                  <Sparkles className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Where groundbreaking ideas become reality through collaboration
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-2xl backdrop-blur-sm border border-accent/20 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                  <Code2 className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Every line of code is visible, verifiable, and open for improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
