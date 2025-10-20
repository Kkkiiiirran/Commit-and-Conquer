import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "AI Content Generator",
    description: "An intelligent content generation tool powered by machine learning algorithms that helps users create high-quality content effortlessly.",
    tags: ["Machine Learning", "Python", "React"],
    image: "🤖",
    github: "https://github.com"
  },
  {
    id: 2,
    name: "Real-time Chat App",
    description: "A real-time messaging application with instant notifications, user authentication, and group chat capabilities.",
    tags: ["Web Dev", "Node.js", "Socket.io"],
    image: "💬",
    github: "https://github.com"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description: "A mobile fitness tracking application that monitors workouts, calories, and provides personalized health recommendations.",
    tags: ["App Dev", "React Native", "Firebase"],
    image: "💪",
    github: "https://github.com"
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description: "An organized code snippet storage and search tool for developers to manage and reuse code efficiently.",
    tags: ["Web Dev", "TypeScript", "MongoDB"],
    image: "📝",
    github: "https://github.com"
  },
  {
    id: 5,
    name: "Smart Home Dashboard",
    description: "A comprehensive dashboard for controlling and monitoring smart home devices with real-time data visualization.",
    tags: ["IoT", "Python", "React"],
    image: "🏠",
    github: "https://github.com"
  },
  {
    id: 6,
    name: "Portfolio Generator",
    description: "An automated portfolio generator that creates beautiful, responsive portfolio websites from user data.",
    tags: ["Web Dev", "Next.js", "Tailwind"],
    image: "🎨",
    github: "https://github.com"
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

const ProjectCard = ({ project, onViewClick }) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-8xl">
        {project.image}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="rounded-full text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          className="w-full rounded-xl mt-auto"
          onClick={() => onViewClick(project)}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Project
        </Button>
      </div>
    </Card>
  );
};

const ProjectDetailView = ({ project, onBack }) => {
  return (
    <section className="py-24 px-6 bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="outline"
          className="mb-8 rounded-full"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="text-9xl">{project.image}</div>
              <div className="flex-1 space-y-4">
                <h1 className="text-5xl font-bold">
                  {project.name}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="default" className="rounded-full text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </Card>

          {/* Tech Stack Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="rounded-full text-base py-2 px-4">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Links Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
            <h2 className="text-2xl font-bold mb-6">Links</h2>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="rounded-xl flex-1 min-w-[200px]"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    const matchesSearch = !searchQuery || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

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
            <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
              <ProjectCard 
                project={project} 
                onViewClick={setSelectedProject}
              />
            </div>
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
