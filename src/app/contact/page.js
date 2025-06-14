export const metadata = {
  title: "Contact Us – ClientNest",
  description: "Reach out to the ClientNest team.",
};

export default function ContactUsPage() {
  return (
    <section className="w-full bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Contact Us</h1>
        <p className="mb-4">Last updated: June 10, 2025</p>

        <p className="mb-4">We’re here to help with any questions or concerns you may have.</p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Email:</strong> <a href="mailto:support@clientnesthq.com" className="text-blue-600 underline">support@clientnesthq.com</a></li>
          {/* <li><strong>Phone:</strong> Optional, if you want to add one</li> */}
          {/* <li><strong>Address:</strong> Add virtual office or business address if needed</li> */}
        </ul>

        <p>If your query is about billing, account issues, or feedback, email us directly and we’ll get back to you within 24–48 hours.</p>

        <a href="/" className="inline-block mt-10 text-blue-900 font-medium underline">
          ← Back to Homepage
        </a>
      </div>
    </section>
  );
}
