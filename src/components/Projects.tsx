import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "AI Content Generator",
    description: "Create stunning content using advanced AI models with an intuitive interface",
    tags: ["Machine Learning", "Python", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "🤖"
  },
  {
    id: 2,
    name: "Real-time Chat App",
    description: "Full-stack messaging platform with end-to-end encryption and media sharing",
    tags: ["Web Dev", "Node.js", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "💬"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with beautiful data visualizations",
    tags: ["App Dev", "React Native", "Firebase"],
    github: "https://github.com",
    demo: null,
    image: "💪"
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description: "Organize and share your code snippets with syntax highlighting and tags",
    tags: ["Web Dev", "TypeScript", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "📝"
  },
  {
    id: 5,
    name: "Smart Home Dashboard",
    description: "Control and monitor IoT devices with a modern, responsive interface",
    tags: ["IoT", "Python", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "🏠"
  },
  {
    id: 6,
    name: "Portfolio Generator",
    description: "Generate stunning portfolio websites from your GitHub profile automatically",
    tags: ["Web Dev", "Next.js", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "🎨"
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
