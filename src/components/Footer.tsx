import { Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              OpenSource Event
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering developers to collaborate, contribute, and create amazing open source projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {/* <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li> */}
              <li>
                <a
                  href="https://v0-code-benders.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/codebenders/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Linkedin
                </a>
              </li>
              {/* <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary hover:text-white transition-colors"
                onClick={() => window.open("https://v0-code-benders.vercel.app/", "_blank")}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary hover:text-white transition-colors"
                onClick={() => window.open("https://www.linkedin.com/company/codebenders/posts/?feedView=all", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              {/* <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary hover:text-white transition-colors"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="h-4 w-4" />
              </Button> */}
              {/* <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:bg-primary hover:text-white transition-colors"
                onClick={() => window.open("https://discord.com", "_blank")}
              >
                <MessageSquare className="h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 OpenSource Event. Built with ❤️ by the community.</p>
          <p className="mt-2">Made for developers, by developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
