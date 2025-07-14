// src/components/Countdown.js
"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const launchDate = new Date("2025-07-18T12:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-yellow-300 text-2xl font-mono mb-8">
      {["Days", "Hours", "Mins", "Secs"].map((label, i) => {
        const value = Object.values(timeLeft)[i];
        return (
          <div key={label} className="flex flex-col items-center">
            <span className="text-5xl">{value}</span>
            <span className="text-sm text-gray-400">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
