import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Sponsors from "@/components/Sponsors";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";


const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-10-23T19:00:00+05:30").getTime(); // your registration deadline
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="text-center py-8">
  <h2 className="text-2xl font-semibold mb-2">Registration Ends In:</h2>
  <p className="text-lg">
    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
  </p>
</div>

      <About />
      <Benefits />
      <Sponsors />
      <Projects />
      <Timeline timeLeft={timeLeft}   />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
