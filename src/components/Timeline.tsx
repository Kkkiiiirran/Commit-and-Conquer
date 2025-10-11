import {
  Calendar,
  CheckCircle2,
  Trophy,
  CalendarX,
  Rocket,
  Hourglass,
} from "lucide-react";
import { useEffect, useState } from "react";

const timelineEvents = [
  {
    icon: Calendar,
    title: "Registration Open",
    date: "October 8, 2025",
    description:
      "Registration portal opens for contributors and project admins",
    status: "current",
    link: "https://unstop.com/hackathons/commit-and-conquer-igdtuw-delhi-1571144?lb=ATJ34nu&utm_medium=Share&utm_source=anshiaro5901&utm_campaign=Online_coding_challenge",
  },
  {
    icon: CalendarX,
    title: "Registration Deadline",
    date: "October 22, 2025",
    description: "Deadline for registration",
    status: "upcoming",
  },
  {
    icon: Rocket,
    title: "Contribution Period Starts",
    date: "October 20, 2025",
    description: "Students can start contribution",
    status: "upcoming",
  },
  {
    icon: Hourglass,
    title: "Contribution Period Ends",
    date: "November 4, 2025",
    description: "Students need to finalise all PR's",
    status: "upcoming",
  },
  {
    icon: Trophy,
    title: "Results Announced",
    date: "to be announced",
    description: "Winners announced and certificates distributed",
    status: "upcoming",
  },
];

const Timeline = () => {
  // ===== Inline Countdown Logic =====
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const targetDate = new Date("2025-10-22T23:59:59").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

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
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      event.status === "completed"
                        ? "bg-primary"
                        : event.status === "current"
                        ? "bg-secondary animate-pulse"
                        : "bg-muted"
                    }`}
                  >
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 ml-28 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-card/50 backdrop-blur-sm border ${
                      event.status === "current"
                        ? "border-secondary/50 shadow-xl shadow-secondary/20"
                        : "border-border/50"
                    } rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1`}
                  >
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
                    <p className="text-sm text-primary font-semibold mb-2">
                      {event.date}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Register Here →
                      </a>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Countdown Timer Below Timeline ===== */}
        <div className="mt-16 flex flex-col items-center justify-center p-8 bg-black text-white rounded-2xl shadow-lg border border-gray-800">
          {timeLeft.expired ? (
            <h2 className="text-2xl font-bold text-red-500">
              Registration Closed
            </h2>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4 text-gray-200">
                Registration closes in
              </h2>
              <div className="flex gap-4 text-center">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="flex flex-col items-center bg-gray-900 px-4 py-2 rounded-lg shadow-md"
                  >
                    <span className="text-4xl font-bold text-purple-500">
                      {timeLeft[unit as keyof typeof timeLeft]}
                    </span>
                    <span className="text-sm text-gray-400 uppercase">{unit}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

