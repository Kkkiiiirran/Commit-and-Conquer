import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Addiction Risk Assessment",
    description: "The goal of this project is to predict the likelihood of addiction (Yes/No) based on user-specific inputs including:

Substance usage (Alcohol, Cannabis, Tobacco, etc.)
Age of first use and current age
Frequency of usage
Reported stress levels and diagnosed mental health conditions
Coping mechanisms and presence of support systems
Through this, we aim to:

Understand patterns of substance exposure, especially in adolescence or pre-teen years
Explore behavioral risk factors contributing to addiction
Enable predictive modeling to assist mental health professionals",
    tags: ["Machine Learning", "Python", "Data Science"],
    github: "https://github.com/simrann0104/Addiction-Risk-Prediction-Using-Python/tree/main",
    demo: null,
    image: "📊"
  },
  {
    id: 2,
    name: "Chat-app-project",
    description: "Enhance the conversation in a chat with any different language in any different country anywhere any relation",
    tags: ["JavaScript", "Node.js", "Socket.io"],
    github: "https://github.com/ayayayayayayayaay/chat-app-project",
    demo: null,
    image: "💬"
  },
  {
    id: 3,
    name: "MLDL.Study",
    description: "MLDL.Study is a free and interactive learning platform designed to simplify Machine Learning (ML) and Deep Learning (DL) education for students and enthusiasts. Currently focused on Indian audiences, the platform features curated roadmaps, videos, articles, and other learning materials.",
    tags: ["JavaScript", "React", "Vite"],
    github: "https://github.com/anshaneja5/mldl.study",
    demo: "https://www.mldl.study/",
    image: "📚"
  },
  {
    id: 4,
    name: "Markit Chrome Extension",
    description: "Markit is a simple yet powerful Chrome extension that lets you highlight and save text directly from any webpage.
Whether you’re reading an article, doing research, or collecting quotes — Markit keeps your important lines just one click away.",
    tags: ["JavaScript", "HTML/CSS", "Chrome Extension"],
    github: "https://github.com/Deepak-Kambala/MarkIt-extension",
    demo: null,
    image: "🧩"
  },
  {
    id: 5,
    name: "NeoNest",
    description: "NeoNest is a smart parenting website designed for parents of newborns (0-12 months), specially for first-time parents. The project envisions to help parents navigate their child's journey in these crucial months while taking care of their own by making things simple and smooth. The website provides various features including trackers, inventory suggestions, tasks automation, curated resources for parents and a notification system to keep them alert and informed.",
    tags: ["JavaScript", "Next.js", "MongoDB"],
    github: "https://github.com/AditiGupta-tech/neonest",
    demo: "https://neonest-babycare.vercel.app/",
    image: "👶"
  },
  {
    id: 6,
    name: "DocMagic",
    description: "The project which helps you creating any type of documents and also creating website and also logo and figma design with ai ",
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://www.github.com/Muneerali199/DocMagic",
    demo: "Docmagic-orcin.vercel.app",
    image: "📝"
  },
  {
    id: 7,
    name: "Pest Detection in Peanut Farming",
    description: "A machine learning and image processing solution that automatically detects and identifies pests in peanut crops. By analyzing plant images, it recognizes various pest species, enabling early and accurate pest control, improving crop health, reducing pesticide use, and increasing yields.",
    tags: ["React", "TypeScript", "Supabase"],
    github: "https://github.com/Bhuvaneshwari244/pest-detection.git",
    demo: "pest-detection-sczg-3eym9ofcd-bhuvaneshwari244s-projects.vercel.app",
    image: "🌱"
  }, 
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    const matchesSearch = !searchQuery || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing projects built by our community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-12 h-14 bg-card/50 border-border/50 rounded-2xl text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedTag(null)}
            >
              All Projects
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-8xl">
                {project.image}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-xl"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 rounded-xl"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No projects found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
