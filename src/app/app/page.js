// src/app/app/page.js
import Countdown from "@/app/components/Countdown";
import Link from "next/link";

export const metadata = {
  title: "ClientNest App – Launching Soon",
  description: "The CRM you’ve been waiting for is almost here.",
};

export default function AppLaunchPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">Launching Soon</h1>
        <p className="text-lg text-gray-300 mb-8">
          The full CRM experience is almost here. We&apos;re putting on the final touches.
        </p>

        <Countdown />

        <Link
          href="/"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
