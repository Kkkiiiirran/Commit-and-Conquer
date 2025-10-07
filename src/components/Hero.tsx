import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">
              Commit and Conquer
            </span>
            {" "}<br />
            <span className="text-3xl md:text-4xl">An Open Source Fest by Codebenders</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the ultimate open-source event where developers unite to build, learn, and innovate together. 
            Transform ideas into reality with a global community of creators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-2xl"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 bg-background/10 backdrop-blur-sm hover:bg-primary/20 text-lg px-8 py-6 rounded-2xl"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd9DdaI9EdHCgY8rn4e4r3T3JOPcPcq-ICMLJGme-lvOPW-DA/viewform?usp=dialog", "_blank")}
            >
              <Users className="mr-2 h-5 w-5" />
              Apply as Contributor
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary/50 bg-background/10 backdrop-blur-sm hover:bg-secondary/20 text-lg px-8 py-6 rounded-2xl"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdvH6hg_9jNWsIRwqjvgJWOXQoe3NmJjF7ygg8ZTS4CZ2ZMSw/viewform?usp=header", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              Apply as Project Admin
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
