// app/components/WaitlistForm.js
"use client";

export default function WaitlistForm() {
  return (
    <form
      action="https://submit-form.com/bzWHu1l6p"
      method="POST"
      className="mt-8 space-y-4 text-left"
    >
      <input type="hidden" name="_redirect" value="/success" />
      <input type="checkbox" name="_honeypot" className="hidden" style={{ display: "none" }} />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
        required
      />
      <textarea
        name="message"
        placeholder="What do you struggle with in client management?"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-900 focus:outline-none focus:border-blue-900 transition"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 active:bg-blue-950 transition-colors"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "join_waitlist_click", {
              event_category: "CTA",
              event_label: "Join Waitlist Section",
            });
          }
        }}
      >
        Join Waitlist
      </button>
    </form>
  );
}
