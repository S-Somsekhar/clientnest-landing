// src/app/page.js
import Image from "next/image";
import DemoSection from "./components/demovid";
import FAQSection from "./components/FAQ";
import CTAFooter from "./components/CTA";


export const metadata = {
  title: 'ClientNest – Close More Clients, Effortlessly',
  description: 'Ditch spreadsheets. Organize your leads, follow-ups, and deals – all in one smart CRM.',
};
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
            {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
            ClientNest
          </h1>
          <nav className="hidden md:flex gap-8 text-base font-semibold tracking-wide text-gray-700">
            <a href="#features" className="hover:text-blue-900 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-blue-900 transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
          </nav>
        </div>
        <a
  href="https://app.clientnesthq.com"
  target="_blank"
  rel="noopener noreferrer"
          className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-blue-800 transition"
        >
          Go to App
        </a>
      </header>

{/* Hero Section */}
<div className="flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-3xl w-full">
    {/* Badge with pulse only on desktop */}
    <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-green-400 to-green-500 text-white shadow-sm sm:animate-pulse">
      🚀 Early Adopter Special • Limited Spots
    </div>

    {/* Headline with responsive line breaks */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
        Ditch Spreadsheets.
      </span>
      <br className="hidden sm:block" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600">
        Close More Clients.
      </span>
    </h1>

    {/* Subtitle with responsive sizing */}
    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
      The <span className="font-semibold text-blue-600">no-bullshit CRM</span> for solopreneurs who hate complexity
    </p>

    {/* CTAs with perfect mobile scaling */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 w-full px-4 sm:px-0">
      <a
        href="https://app.clientnesthq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-none text-sm sm:text-base px-5 py-3 bg-gradient-to-br from-blue-700 to-blue-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all max-w-xs mx-auto sm:mx-0 w-full text-center"
      >
        Start Free Trial →
      </a>
      <a
        href="#features"
        className="flex-1 sm:flex-none text-sm sm:text-base px-5 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all max-w-xs mx-auto sm:mx-0 w-full text-center"
      >
        See Features
      </a>
    </div>

    {/* Trust indicators that don't lie */}
    <div className="mt-8 flex flex-col items-center">

      <p className="mt-3 text-xs sm:text-sm text-gray-600">
        Join our first <span className="font-semibold">100 users</span> across 5+ countries
      </p>
    </div>
  </div>
</div>


{/* Comparison Table v4 - The Goldilocks Version */}
<section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:py-16 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
      Stop Leaving <span className="text-blue-700">Money On The Table</span>
    </h2>
    
    {/* Desktop Table - Now With Perfect Spacing */}
    <div className="hidden md:block mt-10 relative">
      {/* BEST badge - perfectly positioned */}
      <div className="absolute -top-4 right-4 z-10">
        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md inline-flex items-center">
          ★ BEST CHOICE
        </span>
      </div>
      
      <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full bg-white">
          <thead className="bg-gradient-to-r from-blue-900 to-blue-700">
            <tr>
              <th className="py-3 px-4 sm:px-5 text-left font-medium text-white w-[22%]">Tool</th>
              <th className="py-3 px-4 sm:px-5 text-center font-medium text-white w-[26%]">Spreadsheets</th>
              <th className="py-3 px-4 sm:px-5 text-center font-medium text-white w-[26%]">Traditional CRMs</th>
              <th className="py-3 px-4 sm:px-5 text-center font-medium text-white w-[26%]">ClientNest</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { 
                feature: "Ease of Use", 
                spreadsheets: "Manual, cluttered", 
                crms: "Complex & bloated", 
                clientnest: "One-click workflow",
              },
              { 
                feature: "Follow-ups", 
                spreadsheets: "Easily forgotten", 
                crms: "Over-engineered", 
                clientnest: "Daily smart reminders" 
              },
              { 
                feature: "Setup Time", 
                spreadsheets: "Hours", 
                crms: "Days", 
                clientnest: "5 minutes" 
              },
              { 
                feature: "Cost", 
                spreadsheets: "Free (but chaotic)", 
                crms: "$40+/month", 
                clientnest: "$10/month" 
              }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 sm:px-5 text-left font-medium text-blue-900">
                  {row.feature}
                </td>
                <td className="py-3 px-4 sm:px-5 text-center text-gray-600">
                  {row.spreadsheets}
                </td>
                <td className="py-3 px-4 sm:px-5 text-center text-gray-600">
                  {row.crms}
                </td>
                <td className="py-3 px-4 sm:px-5 text-center font-medium text-blue-600 relative">
                  <span className="relative z-10">{row.clientnest}</span>
                  {row.highlight && (
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {row.highlight}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6">
        <a 
          href="https://app.clientnesthq.com" 
          className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
        >
          Start Your Free Trial
        </a>
      </div>
    </div>

    {/* Mobile Cards - Tightened Up */}
    <div className="mt-8 md:hidden space-y-4">
      {[
        {
          feature: "Ease of Use",
          icon: "👐",
          bad: "Manual, cluttered",
          worse: "Complex & bloated",
          good: "One-click workflow",
          highlight: "Easiest"
        },
        { feature: "Follow-ups", bad: "Easily forgotten", worse: "Over-engineered", good: "Daily reminders", icon: "⏰" },
        { feature: "Setup Time", bad: "Hours", worse: "Days", good: "5 mins", icon: "⚡" },
        { feature: "Cost", bad: "Free (but chaotic)", worse: "$40+/mo", good: "$10/mo", icon: "💰" }
        // ... other rows ...
      ].map((row, i) => (
        <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">{row.icon}</span>
            <h3 className="font-bold text-blue-900">{row.feature}</h3>
            {row.highlight && (
              <span className="ml-auto bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                {row.highlight}
              </span>
            )}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Spreadsheets:</span>
              <span>{row.bad}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Traditional CRMs:</span>
              <span>{row.worse}</span>
            </div>
            <div className="flex justify-between font-medium text-blue-600">
              <span>ClientNest:</span>
              <span>{row.good}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<DemoSection/>

{/* USP Section */}
<section id="features" className="w-full bg-gray-100 py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
    <div className="md:w-1/2 relative">
      <img 
        src="/gifs/csv-import.gif" 
        alt="Bulk CSV Import Animation" 
        className="rounded-xl shadow-xl w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-blue-900 border border-gray-200">
        No Tech Skills Needed
      </div>
    </div>

    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        Migrate from <span className="whitespace-nowrap">Sheets in</span> <span className="text-blue-600">Seconds</span>
      </h2>
      <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
        Ditch the spreadsheet chaos. Import all your leads in one go and start managing them inside ClientNest&apos;s <span className="font-semibold">powerful pipeline view</span> — instantly.
      </p>
      <ul className="space-y-3 text-gray-700 text-left mb-8">
        {[
          "Upload lead lists as CSV/XLSX",
          "Instant field mapping (drag & drop)",
          "Bulk import hundreds in seconds"
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition group"
      >
        Import & Go
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div className="md:w-1/2 relative">
      <img 
        src="/gifs/smart-nudge.gif" 
        alt="Smart Lead Nudge Animation" 
        className="rounded-xl shadow-xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute -top-3 -left-3 bg-yellow-100 px-3 py-1 rounded-full shadow-md text-sm font-medium text-yellow-900">
        Pro Tip
      </div>
    </div>

    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        Never Let a Lead <span className="text-blue-600">Go Cold</span> Again
      </h2>
      <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
        ClientNest tracks inactivity and <span className="font-semibold">nudges you intelligently</span> when it&apos;s time to follow up — whether it&apos;s been 3 days or 3 weeks.
      </p>
      <ul className="space-y-3 text-gray-700 text-left mb-8">
        {[
          "Auto-identifies cold leads in your pipeline",
          "Context-aware reminders (not just timers)",
          "1-click follow-ups via Email/WhatsApp"
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition group"
      >
        Try Smart Nudges
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-gray-100 py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
    <div className="md:w-1/2 text-center md:text-left order-1">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        From <span className="text-blue-700">Lead</span> to <span className="text-blue-700">Long-Term</span> Client
      </h2>
      <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
        ClientNest doesn&apos;t stop at closing deals. <span className="font-semibold">Convert, track, and grow</span> relationships — all from one dashboard.
      </p>
      <ul className="space-y-3 text-gray-700 text-left mb-8">
        {[
          "Convert leads → clients in one click",
          "Full service history & communication logs",
          "Revenue tracking per client",
          "Repeat business reminders"
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://app.clientnesthq.com"
        className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition group"
      >
        Explore Dashboard
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>

    <div className="md:w-1/2 relative order-2">
      <img 
        src="/gifs/client-dashboard.gif" 
        alt="Client Dashboard Animation" 
        className="rounded-xl shadow-xl w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute -bottom-3 -left-3 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-purple-900 border border-gray-200">
        Revenue Tracking
      </div>
    </div>
  </div>
</section>

{/* Feature Stack */}
<section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto text-center">
    <div className="mb-4">
      <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Why Choose Us
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-800">
        Built for <span className="whitespace-nowrap">Solopreneurs</span>
      </span>
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Everything you need to close deals.<br className="hidden sm:block" /> Nothing you don&apos;t.
    </p>

    <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: 'Drag-n-Drop Pipelines',
          desc: 'Visually move leads across stages with simple drag-and-drop.',
          icon: '👉',
          highlight: false
        },
        {
          title: 'Smart Follow-up Nudges',
          desc: 'AI-powered reminders when leads go cold.',
          icon: '⏰',
          highlight: true
        },
        {
          title: 'Complete Lead History',
          desc: 'Every call, message, and note in one timeline.',
          icon: '📝',
          highlight: false
        },
        {
          title: '1-Click Follow-Ups',
          desc: 'Email or WhatsApp outreach directly from dashboard.',
          icon: '⚡',
          highlight: true
        },
        {
          title: 'Zero Learning Curve',
          desc: 'Start closing deals in minutes, not hours.',
          icon: '🎯',
          highlight: false
        },
        {
          title: 'Lightning Fast Mobile',
          desc: 'Full power in your pocket with instant loading.',
          icon: '📱',
          highlight: true
        },
      ].map((feature, i) => (
        <div 
          key={i}
          className={`relative p-6 rounded-xl border transition-all duration-300 ${feature.highlight ? 'border-blue-200 bg-white shadow-lg hover:shadow-xl' : 'border-gray-200 bg-gray-50 hover:bg-white'} hover:-translate-y-1.5`}
        >
          {feature.highlight && (
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
              POPULAR
            </div>
          )}
          <div className="text-3xl mb-3">{feature.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
          
          {/* Hidden on mobile, visible on hover */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity">
            <a 
              href="#demo" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              See how it works
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="w-full bg-gray-50 py-8 sm:py-10 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto text-center">
    <div className="mb-4">
      <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Real Results
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Trusted by <span className="text-blue-900">Solopreneurs</span> Worldwide
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Join hundreds of early adopters who&apos;ve streamlined their client workflow
    </p>

    <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: 'Anika Bergman',
          role: 'Marketing Consultant',
          quote: 'Finally a CRM that doesn’t make me want to rip my hair out. Migrated from Notion in 10 minutes flat.',
          verified: true
        },
        {
          name: 'Elias Callahan',
          role: 'Sales Coach',
          quote: 'Closed 3 new clients last week thanks to the follow-up reminders. Worth every penny.',
          verified: true
        },
        {
          name: 'Awesh Sheikh',
          role: 'Digital Agency Owner',
          quote: 'Other CRMs feel like flying a spaceship. This feels like driving a Tesla.',
          verified: true
        },
      ].map((testimonial, i) => (
        <div 
          key={i}
          className="relative bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all"
        >
          {/* Verified Badge */}
          {testimonial.verified && (
            <div className="absolute top-4 right-4 text-blue-500" title="Verified user">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          
          {/* Quote */}
          <div className="text-gray-700 mb-6 relative">
            <svg className="absolute -top-1 left-0 w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="pl-8 text-gray-600 italic">{testimonial.quote}”</p>
          </div>
          
          {/* Author */}
          <div className="border-t border-gray-100 pt-4">
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Indicator */}
    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        All testimonials verified
      </span>
      <span className="hidden sm:block">•</span>
      <span>50+ happy early adopters</span>
    </div>
  </div>
</section>

{/* Pricing */}
<section id="pricing" className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto text-center">
    <div className="mb-4">
      <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Pricing Built for Growth
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
        Simple Pricing,
      </span> <span className="whitespace-nowrap">Serious Results</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      No upsells. No surprise fees. Just everything you need to close more deals.
    </p>

    <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-3">
      {/* Monthly Plan */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Monthly</h3>
        <p className="mt-1 text-gray-600 text-sm sm:text-base">Flexible month-to-month</p>
        
        <div className="mt-6">
          <span className="text-4xl font-extrabold text-gray-900">$10</span>
          <span className="text-gray-500 text-sm sm:text-base">/month</span>
        </div>
        
        <ul className="mt-6 space-y-3 text-left text-gray-700 text-sm sm:text-base">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>All core features</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>14-day free trial</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Cancel anytime</span>
          </li>
        </ul>
        
        <a
          href="https://app.clientnesthq.com"
          className="mt-8 w-full inline-flex justify-center items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Free Trial
        </a>
      </div>

      {/* Yearly Plan - Highlighted */}
      <div className="relative bg-white p-6 sm:p-8 rounded-xl border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
        {/* Popular Badge */}
        <div className="absolute top-0 right-6 transform translate-y-[-50%] bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
          MOST POPULAR
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Yearly</h3>
        <p className="mt-1 text-gray-600 text-sm sm:text-base">Best value - save 17%</p>
        
        <div className="mt-6">
          <span className="text-4xl font-extrabold text-gray-900">$99</span>
          <span className="text-gray-500 text-sm sm:text-base">/year</span>
          <div className="text-sm text-green-600 font-medium mt-1">≈ $8.25/month</div>
        </div>
        
        <ul className="mt-6 space-y-3 text-left text-gray-700 text-sm sm:text-base">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Everything in Monthly</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Priority email support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Feature voting power</span>
          </li>
        </ul>
        
        <a
          href="https://app.clientnesthq.com"
          className="mt-8 w-full inline-flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Yearly Plan
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

      {/* Pro Plan */}
      <div className="bg-gradient-to-b from-gray-900 to-black text-white p-6 sm:p-8 rounded-xl border-2 border-yellow-500 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Pro Plan</h3>
        <p className="mt-1 text-gray-300 text-sm sm:text-base">For scaling businesses</p>
        
        <div className="mt-6">
          <span className="text-4xl font-extrabold text-white">$15</span>
          <span className="text-gray-400 text-sm sm:text-base">/month</span>
        </div>
        
        <ul className="mt-6 space-y-3 text-left text-gray-300 text-sm sm:text-base">
          <li className="flex items-start">
            <span className="w-5 h-5 mr-2 flex-shrink-0">🧾</span>
            <span>Invoice Generator <span className="text-yellow-400 text-xs ml-1">(coming soon)</span></span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 mr-2 flex-shrink-0">🤖</span>
            <span>AI Deal Insights <span className="text-yellow-400 text-xs ml-1">(coming soon)</span></span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 mr-2 flex-shrink-0">💬</span>
            <span>AI Chat Assistant <span className="text-yellow-400 text-xs ml-1">(coming soon)</span></span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 mr-2 flex-shrink-0">📱</span>
            <span>Mobile App Beta Access</span>
          </li>
        </ul>
        
        <div className="mt-8">
          <button className="w-full inline-flex justify-center items-center bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg opacity-90 cursor-not-allowed">
            Join Waitlist
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </button>
          <p className="mt-2 text-xs text-gray-400">Launching to early adopters first</p>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-16 pt-6 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          14-day free trial
        </span>
        <span className="hidden sm:block">•</span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Cancel anytime
        </span>
        <span className="hidden sm:block">•</span>
        <span>Secure payments via Stripe</span>
      </div>
      <p className="mt-6 text-sm text-gray-500 max-w-2xl mx-auto">
        <span className="font-medium">Fun fact:</span> Costs less than two coffees per month. 
        But helps you close deals worth thousands.
      </p>
    </div>
  </div>
</section>


<FAQSection/>

<CTAFooter/>

{/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-10 px-6 mt-[-2px] border-t border-gray-800" >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ClientNest. All rights reserved. By <span className=" font-bold">
        <a href="https://clientnesthq.com" target="_blank" rel="noopener noreferrer">
          ClientNest HQ
        </a>
      </span></div>
          <div className="flex gap-6 mt-6 md:mt-0">
          
{/* Social Links */}
          <div className="flex gap-4 order-1 md:order-2">
            <a
              href="https://instagram.com/clientnesthq"
              aria-label="Instagram"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/clientnest"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:support@clientnesthq.com"
              aria-label="Email"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>

          
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/stripe-secure.svg"
              alt="Stripe Secured"
              width={80}
              height={20}
              className="h-5 w-auto"
            />
            Payments secured via Stripe
          </span>
        </div> 

<div className="mt-5 text-center text-sm text-gray-500 space-x-4">
  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
  <span>|</span>
  <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>

</div>

      </footer>
    </main>
  );
}
