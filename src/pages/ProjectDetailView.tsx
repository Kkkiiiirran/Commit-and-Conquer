import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../components/Projects";

interface Project {
  id: number;
  name: string;
  description: string[];
  tags: string[];
  github: string;
  image: string;
}

type RouteParams = {
  id: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectDetailView: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();

  const project = projects.find((p: Project) => p.id === Number(id));

  if (!project) {
    return <p className="text-center mt-20 text-lg">Project not found</p>;
  }

  return (
    <section className="relative py-16 px-6 min-h-screen transition-all duration-300">
      {/* Gradient Page Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant="outline"
            className="mb-8 rounded-full hover:scale-105 transition-transform"
            onClick={() => navigate("/#projects")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="text-8xl sm:text-9xl drop-shadow-md select-none"
            >
              {project.image}
            </motion.div>

            <div className="flex-1 space-y-4 text-center sm:text-left">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
              >
                {project.name}
              </motion.h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="default"
                    className="rounded-full text-sm hover:scale-110 hover:bg-primary/90 transition-all"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <motion.div
            variants={fadeIn}
            whileHover={{
              scale: 1.02,
              y: -3,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <Card className="p-8 shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-justify">
                {project.description.map((point, index) => (
                  <li
                    key={index}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={fadeIn}
            whileHover={{
              scale: 1.02,
              y: -3,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <Card className="p-8 shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <motion.div whileHover={{ scale: 1.1, rotate: 2 }} key={tag}>
                    <Badge
                      variant="secondary"
                      className="rounded-full text-base py-2 px-4 cursor-default"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeIn}
            whileHover={{
              scale: 1.02,
              y: -3,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <Card className="p-8 shadow-md transition-all duration-300 text-center">
              <h2 className="text-2xl font-bold mb-6">Links</h2>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  size="lg"
                  className="rounded-xl flex items-center justify-center gap-2 min-w-[200px] mx-auto hover:shadow-md hover:scale-105 transition-all"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailView;
