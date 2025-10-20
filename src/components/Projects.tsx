
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Addiction Risk Assessment",
    description: [
      "Assesses an individual's likelihood of addiction using behavioral and psychological parameters.",
      "Analyzes features such as substance usage patterns, age of first exposure, stress indicators, and coping mechanisms.",
      "Classifies users into 'At Risk' or 'Low Risk' categories for early intervention.",
      "Empowers healthcare and mental wellness professionals to design personalized, proactive interventions.",
      "Supports data-driven decision making for preventive care."
    ],
    tags: ["Machine Learning", "Python", "Data Analysis"],
    image: "/image1.jpg",
    github: "https://github.com/simrann0104/Addiction-Risk-Prediction-Using-Python/tree/main",
  },
  {
    id: 2,
    name: "Chat App Project",
    description: [
      "Real-time multilingual chat platform for seamless global communication.",
      "Supports instant messaging with live translation across different languages.",
      "Features custom chat rooms, user authentication, and message delivery status.",
      "Built using Node.js, Express, and Socket.io for live updates.",
      "Ideal for personal and professional use across diverse communities."
    ],
    tags: ["Web Dev", "Node.js", "Socket.io", "Express"],
    image: "/image2.jpg",
    github: "https://github.com/ayayayayayayayaay/chat-app-project",
  },
  {
    id: 3,
    name: "MLDL.Study",
    description: [
      "Interactive, open-access e-learning platform for Machine Learning and Deep Learning.",
      "Provides structured roadmaps, curated tutorials, research papers, and conceptual explainers.",
      "Tailored for students and enthusiasts in India, bridging the gap between theory and practice.",
      "Helps learners navigate AI effectively with hands-on projects.",
      "Supports both beginners and advanced learners in understanding ML/DL concepts."
    ],
    tags: ["Web Dev", "React", "Machine Learning", "Education"],
    image: "/image3.jpg",
    github: "https://github.com/anshaneja5/mldl.study",
  },
  {
    id: 4,
    name: "Front-End Website",
    description: [
      "Modern and responsive front-end website focused on usability and accessibility.",
      "Built using semantic HTML, modular CSS, and interactive JavaScript components.",
      "Demonstrates best practices in layout design, responsiveness, and performance.",
      "Adaptable for portfolio, business, or product websites.",
      "Clean and visually appealing interface for a professional user experience."
    ],
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    image: "/image4.jpg",
    github: "https://github.com/ayayayayayayayaay/Front-end-website",
  },
  {
    id: 5,
    name: "NeoNest",
    description: [
      "Smart parenting platform for parents of newborns (0–12 months).",
      "Features growth trackers, feeding and sleep schedulers, and AI-powered suggestions.",
      "Curates relevant parenting content to guide early developmental milestones.",
      "Built with Next.js, React, and Tailwind for a responsive, intuitive interface.",
      "Combines practicality with emotional support for new parents."
    ],
    tags: ["Web Dev", "Next.js", "React", "Tailwind"],
    image: "/image5.jpg",
    github: "https://github.com/AditiGupta-tech/neonest",
  },
  {
    id: 6,
    name: "Markit Chrome Extension",
    description: [
      "Chrome extension that allows highlighting, saving, and organizing text from webpages.",
      "Transforms browsing into an interactive research experience.",
      "Users can revisit, categorize, and search saved highlights efficiently.",
      "Designed for students, researchers, and professionals.",
      "Helps turn passive reading into a personalized knowledge management workflow."
    ],
    tags: ["Browser Extension", "JavaScript", "Chrome APIs", "HTML/CSS"],
    image: "/image6.jpg",
    github: "https://github.com/Deepak-Kambala/MarkIt-extension",
  },
  {
    id: 7,
    name: "DocMagic",
    description: [
      "AI-powered productivity suite for creating documents, website layouts, logos, and Figma prototypes.",
      "Uses NLP and generative AI models to automate content creation workflows.",
      "Reduces manual effort in design and documentation tasks.",
      "Accessible for non-technical users, enhancing productivity.",
      "Streamlines creation of professional-grade content efficiently."
    ],
    tags: ["AI", "Web Dev", "React", "Figma"],
    image: "/image7.jpg",
    github: "https://www.github.com/Muneerali199/DocMagic",
  },
  {
    id: 8,
    name: "Pest Detection in Peanut Farming",
    description: [
      "AI-powered system for detecting and classifying pests in peanut crops.",
      "Uses image processing and machine learning for early infestation detection.",
      "Reduces pesticide use by identifying issues proactively.",
      "Improves crop yield and supports sustainable farming practices.",
      "Combines precision agriculture with eco-friendly approaches."
    ],
    tags: ["Machine Learning", "Image Processing", "Agritech", "Python"],
    image: "/image8.jpg",
    github: "https://github.com/Bhuvaneshwari244/pest-detection.git",
  }
];


const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-8xl">
          {project.image.startsWith("/") ? (
        <img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
          ) : (
            <span className="text-8xl">{project.image}</span>
          )}

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
          onClick={() => navigate(`/project/${project.id}`)}
        >
          View Project
        </Button>
      </div>
    </Card>
  );
};

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(null);
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
        <div className="text-center mb-12 space-y-4">
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

        {/* Search */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No projects found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
export { projects };
