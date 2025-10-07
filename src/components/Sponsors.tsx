import { Card } from "@/components/ui/card";

const sponsors = [
  { name: "TechCorp", logo: "🚀" },
  { name: "DevTools Inc", logo: "⚡" },
  { name: "CloudBase", logo: "☁️" },
  { name: "CodeLab", logo: "💻" },
  { name: "DataSync", logo: "🔄" },
  { name: "OpenDev", logo: "🌐" },
];

const Sponsors = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by industry leaders who believe in open source
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card
              key={sponsor.name}
              className="group aspect-square flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {sponsor.logo}
              </div>
              <p className="text-sm font-semibold text-center">{sponsor.name}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Interested in sponsoring?{" "}
            <a href="#contact" className="text-primary hover:underline font-semibold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
