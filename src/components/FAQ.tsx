import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in this event?",
    answer: "Anyone passionate about open source! Whether you're a student, professional developer, or coding enthusiast, we welcome contributors of all skill levels. You just need enthusiasm and willingness to learn."
  },
  {
    question: "Is registration free?",
    answer: "Yes, absolutely! This event is completely free to join. We believe in making open source accessible to everyone, so there are no registration fees or hidden costs."
  },
  {
    question: "How can I contribute to projects?",
    answer: "After registering as a contributor, you can browse through available projects, choose ones that interest you, and start contributing by submitting pull requests. Project admins will guide you through the process."
  },
  {
    question: "Can I register multiple projects?",
    answer: "Yes, project admins can register multiple projects. However, we recommend focusing on quality over quantity to ensure you can effectively manage and support your contributors."
  },
  {
    question: "What if I'm new to open source?",
    answer: "That's perfectly fine! This event is designed to be beginner-friendly. We'll provide resources, documentation, and mentorship to help you get started. Many projects have 'good first issue' labels specifically for newcomers."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes! All participants who make meaningful contributions will receive a certificate of participation. Outstanding contributors will also be eligible for special recognition and prizes."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
