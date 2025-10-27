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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 🎯 Target date: 4 Nov 2025, 7:00 PM IST
    const targetDate = new Date("2025-11-04T19:00:00+05:30").getTime();

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

      {/* Countdown Section */}
      <div className="relative text-center py-10 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-3 drop-shadow-lg animate-pulse">
         Contribution Period Ends In
        </h2>
        <p className="text-base text-gray-100 mb-3">(Date: 4 Nov 2025, 7:00 PM IST)</p>
        <p className="text-4xl font-extrabold tracking-widest animate-bounce">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </p>

        {/* Optional glow effect */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg -z-10"></div>
      </div>

      <Hero />
      <About />
      <Benefits />
      <Sponsors />
      <Projects />
      <Timeline timeLeft={timeLeft} />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
