import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Github } from "lucide-react";
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
      "Supports data-driven decision making for preventive care.",
    ],
    tags: ["Machine Learning", "Python", "Data Analysis"],
    image: "/image1.jpg",
    github:
      "https://github.com/simrann0104/Addiction-Risk-Prediction-Using-Python/tree/main",
  },
  {
    id: 2,
    name: "Chat App Project",
    description: [
      "Real-time multilingual chat platform for seamless global communication.",
      "Supports instant messaging with live translation across different languages.",
      "Features custom chat rooms, user authentication, and message delivery status.",
      "Built using Node.js, Express, and Socket.io for live updates.",
      "Ideal for personal and professional use across diverse communities.",
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
      "Supports both beginners and advanced learners in understanding ML/DL concepts.",
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
      "Clean and visually appealing interface for a professional user experience.",
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
      "Combines practicality with emotional support for new parents.",
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
      "Helps turn passive reading into a personalized knowledge management workflow.",
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
      "Streamlines creation of professional-grade content efficiently.",
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
      "Combines precision agriculture with eco-friendly approaches.",
    ],
    tags: ["Machine Learning", "Image Processing", "Agritech", "Python"],
    image: "/image8.jpg",
    github: "https://github.com/Bhuvaneshwari244/pest-detection.git",
  },
  {
    id: 9,
    name: "Safar",
    description: [
      "A ride-hailing mobile application inspired by Uber, designed to connect passengers with nearby drivers in real-time.",
      "Includes user authentication, live location tracking, ride booking, and fare estimation.",
      "Provides a clean and intuitive interface for both riders and drivers.",
      "Built to deliver a seamless and reliable transportation experience.",
      "Features scalable architecture, ready for future additions like payment integration and ride history.",
    ],
    tags: ["React+Vite", "Real-time Tracking", "Tailwind CSS", "React-Router", "OpenStreetMap"],
    image: "/image9.png",
    github: "https://github.com/Kajal09kumari/UBER---clone",
  },
  {
    id: 10,
    name: "Habit Tracker",
    description: [
      "A modern, open-source habit tracking web app designed for simplicity and speed.",
      "Built with React, TypeScript, Vite, and Tailwind CSS for a clean and responsive UI.",
      "Allows users to track daily habits, visualize progress, and build consistent routines.",
      "Includes optional backend integration via Supabase for data persistence and authentication.",
      "Lightweight, fast, and ideal for personal productivity and routine management.",
    ],
    tags: ["Web Dev", "React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: "/image10.jpg",
    github: "https://github.com/Charushi06/Habit-Tracker",  
  },
  {
    id: 11,
    name: "Whatsapp Chat Analyzer",
    description: [
      "A powerful Streamlit web app for analyzing WhatsApp group chat data.",
      "Generates insightful visualizations and detailed chat statistics for deeper insights.",
      "Utilizes machine learning models to predict whether a user is highly active (1) or not (0).",
      "Built with Streamlit and Python for interactive data exploration and user-friendly visualization.",
      "Ideal for understanding group dynamics, engagement levels, and communication patterns.",
    ],
    tags: ["Data Science", "Machine Learning", "Streamlit", "Python", "Data Visualization"],
    image: "/image11.jpg",
    github: "https://github.com/eliterks/whatsapp-chat-analyzer",  
  },
  {
    id: 12,
    name: "NeoSharex",
    description: [
      "An open-source, privacy-focused P2P file transfer platform for direct, encrypted, and high-speed sharing.",
      "Enables secure peer-to-peer file transfers without relying on any central server or cloud storage.",
      "Features cross-platform compatibility, working seamlessly on both desktop and mobile devices.",
      "Provides secure, hassle-free connections via QR code or session code — no sign-up required.",
      "Supports multiple file transfers, resumable uploads/downloads, and file previews for images, videos, and documents.",
      "Showcases a modern glassmorphism UI with theme switching, smooth animations, and responsive design.",
      "Optimized for performance with React.memo, lazy loading, and full ARIA accessibility support.",
      "Built using React 19, Vite 5, Framer Motion 11, Firebase Firestore (for session signaling), and WebRTC DataChannels for encrypted transfers.",
      "Designed for quick and secure file sharing across devices, meetings, and collaborative work environments.",
    ],
    tags: ["Web Dev", "React", "Vite", "WebRTC", "Firebase", "Framer Motion", "P2P", "Data Privacy"],
    image: "/image12.jpg",
    github: "https://github.com/Px-JebaSeelan/Neo-Sharex",  
  },
  {
    id: 13,
    name: "The Mentorship Club",
    description: [
      "A web platform designed to connect mentors and mentees for personal and professional growth.",
      "Enables users to easily find and connect with experienced mentors across various fields.",
      "Offers a rich resource library with curated learning materials and guides for skill development.",
      "Keeps users informed about upcoming mentorship events, workshops, and community activities.",
      "Features a clean, responsive, and user-friendly interface for seamless navigation.",
      "Built using HTML5 and CSS3 for a lightweight and accessible web experience.",
    ],
    tags: ["Web Dev", "HTML5", "CSS3", "Mentorship", "Community", "Responsive Design"],
    image: "/image13.jpg",
    github: "https://github.com/VenusCh001/thementorshipclub",  
  },
  {
    id: 14,
    name: "WanderLust",
    description: [
      "A full-stack web application inspired by Airbnb, designed for exploring and managing travel accommodation listings.",
      "Allows users to create accounts, upload listings with images, post reviews, and manage their own stays securely.",
      "Implements authentication, image storage, and responsive design for a real-world booking experience.",
      "Developed using HTML, CSS, JavaScript, and EJS on the frontend, with Node.js and Express.js on the backend.",
      "Utilizes MongoDB with Mongoose for data management, Cloudinary for image uploads, Passport.js for authentication, and Mapbox for location integration.",
      "Built as a learning project to demonstrate full-stack development skills including RESTful APIs, database management, and user authentication.",
    ],
    tags: ["Full Stack", "Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Passport.js", "Mapbox"],
    image: "/image14.jpg",
    github: "https://github.com/KajalPoria/WanderLust.git",  
  },
  {
    id: 15,
    name: "Umbrella Reminder using Weather API",

    description: [
  "A Python-based automation project that reminds users to carry an umbrella based on real-time weather data.",
  "Fetches current weather conditions using the OpenWeatherMap API for a user-specified city.",
  "Sends automated email notifications when rain is forecasted or currently occurring.",
  "Implements scheduling with the 'schedule' library and email functionality with 'smtplib'.",
  "Uses 'requests' and 'json' for API interaction and data handling.",
  "Designed to help users stay prepared for rainy weather through timely reminders.",
  "Can be extended with calendar integration, SMS alerts, or smart home notifications.",
  "Developed as a practical Python project showcasing API usage, automation, and user notification systems."
],
  
    tags: ["Python", "OpenWeatherMap API","Schedule", "SMTP","Requests", "JSON", "Weather Forecasting", "APIs"],
    image: "/image15.jpg",
    github: "https://github.com/Deepika2732/Scraping-weather-data-using-python-to-get-umbrella-remainder-on-email.git",  
  }
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-8xl">
        {project.image.startsWith("/") ? (
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-4xl">{project.image}</span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.name}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            className="flex-1 rounded-xl hover:scale-105 transition-transform"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            View Project
          </Button>
          <Button
            className="flex-1 rounded-xl hover:scale-105 transition-transform"
            variant="outline"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    const matchesSearch =
      !searchQuery ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.join(" ").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
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

        {/* Search + Filters */}
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
            {allTags.map((tag) => (
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
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
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
