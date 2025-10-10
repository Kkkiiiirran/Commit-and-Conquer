import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Missing fields",
      description: "Please fill in all fields",
      variant: "destructive",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast({
      title: "Invalid email",
      description: "Please enter a valid email address",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {

    const response = await fetch("https://sheetdb.io/api/v1/pe7zzqkx5iuef", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
  data: [
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
  ],
}),
    });

    const resText = await response.text();
console.log("Response text:", resText);
    if (!response.ok) throw new Error("Failed to send data");

    toast({
      title: "Message Sent!",
      description: "Your details have been saved successfully.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    toast({
      title: "Error",
      description: "Something went wrong while sending your message.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-background/50 border-border/50 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-background/50 border-border/50 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] bg-background/50 border-border/50 rounded-xl resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Join our Discord</h3>
              <p className="text-muted-foreground mb-6">
                Connect with our community, ask questions, and stay updated on the latest announcements.
              </p>
              <Button
                variant="outline"
                className="w-full rounded-xl border-primary/50"
                onClick={() => window.open("https://discord.com", "_blank")}
              >
                Join Discord Community
              </Button>
            </Card> */}

            <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">igdtuwcodebenders@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Follow us</h4>
                  <p className="text-muted-foreground">Stay connected on social media for updates</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
