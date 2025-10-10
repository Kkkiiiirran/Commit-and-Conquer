import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const team = [
  // PRESIDENT
  {
    name: "Anshika Arora",
    role: "President",
    image: "https://v0-code-benders.vercel.app/anshika-president.png",
    linkedin: "https://www.linkedin.com/in/anshika-arora-91b3361ba/",
  },

  // VICE PRESIDENTS
  {
    name: "Sonam Kumari",
    role: "Vice President",
    image: "https://v0-code-benders.vercel.app/sonam-vp.png",
    linkedin: "https://www.linkedin.com/in/sonam-kumari-084641257/",
  },
  {
    name: "Divya Sharma",
    role: "Vice President",
    image: "https://v0-code-benders.vercel.app/divya-vp.png",
    linkedin: "https://www.linkedin.com/in/divya-72018a283/",
  },

  // LEADS
  {
    name: "Akanksha Chanana",
    role: "Tech Lead",
    image: "https://v0-code-benders.vercel.app/akanksha-tech-lead.png",
    linkedin: "https://www.linkedin.com/in/akanksha-chanana-490b94215/",
  },
  {
    name: "Sanjana Rathee",
    role: "Outreach Lead",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHf1-RfoAcGqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697381059458?e=1762992000&v=beta&t=PPTSbv9rWEHje9RuvZ9y960NyCRUDEYl_lQwJW7giLY",
    linkedin: "https://www.linkedin.com/in/sanjana-rathee-38876b255/",
  },
  {
    name: "Aditi Goel",
    role: "General Secretary",
   
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHeLwPc2wF9RA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684130489242?e=1762992000&v=beta&t=6p8Ty-FHNc3bipZZPd2NIL7s41VtYj0BJCFjC9KAV7E",
    linkedin: "https://www.linkedin.com/in/aditi-goel-4421b6219/",
  },
];


const Team = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to making open source accessible to everyone
          </p>
        </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {team.map((member, index) => (
    <Card
      key={member.name}
      className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 
                 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 
                 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center">
        {member.image && member.image.startsWith("http") ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-8xl">{member.image || "👤"}</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 text-center">
        <p className="text-lg font-semibold">{member.name}</p>
        {member.role && (
          <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-primary hover:text-primary/80 mt-2 transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        )}
      </div>
    </Card>
  ))}
</div>


      </div>
    </section>
  );
};

export default Team;
