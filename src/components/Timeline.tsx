import { Calendar, CheckCircle2, Trophy, CalendarX,Rocket,Hourglass, } from "lucide-react";

const timelineEvents = [
  {
    icon: Calendar,
    title: "Registration Open",
    date: "October 8, 2025",
    description: "Registration portal opens for contributors and project admins",
    status: "current"
  },
  {
    icon: CalendarX,
    title: "Registration Deadline",
    date: "October 20, 2025",
    description: "Deadline for registration",
    status: "upcoming"
  },
  {
    icon: Rocket,
    title: "Contribution Period Starts",
    date: "October 22, 2025",
    description: "Students can start contribution",
    status: "upcoming"
  },
  {
    icon: Hourglass,
    title: "Contribution Period Ends",
    date: "November 4,2025",
    description: "Students need to finalise all PR's",
    status: "upcoming"
  },
  {
    icon: Trophy,
    title: "Results Announced",
    date: "to be announced",
    description: "Winners announced and certificates distributed",
    status: "upcoming"
  }
];

const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Event{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars for these important dates
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    event.status === "completed" ? "bg-primary" :
                    event.status === "current" ? "bg-secondary animate-pulse" :
                    "bg-muted"
                  }`}>
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-28 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className={`bg-card/50 backdrop-blur-sm border ${
                    event.status === "current" ? "border-secondary/50 shadow-xl shadow-secondary/20" : "border-border/50"
                  } rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                      {event.status === "completed" && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                      {event.status === "current" && (
                        <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
