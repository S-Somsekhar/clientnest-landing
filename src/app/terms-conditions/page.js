import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions – ClientNest",
  description: "The legal terms governing your use of ClientNest.",
};

export default function TermsPage() {
  return (
    <section className="w-full bg-white min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Terms of Service
            </span>
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>Last updated: June 10, 2025</span>
            <span>•</span>
            <Link href="/privacy" className="text-blue-600 hover:underline">
              View Privacy Policy
            </Link>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-blue max-w-none mb-12">
          <p className="text-gray-700">
            By using <strong>ClientNest</strong> (&quot;Service&quot;), you agree to these terms. Please read them carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {[
            {
              title: "Account Responsibilities",
              content: "You must provide accurate information and keep your login credentials secure. You're responsible for all activity under your account."
            },
            {
              title: "Subscription Terms",
              content: (
                <ul className="space-y-2 pl-5">
                  <li className="relative ">
                    Monthly/annual plans auto-renew until cancelled
                  </li>
                  <li className="relative ">
                    Fees are non-refundable except as required by law
                  </li>
                  <li className="relative ">
                    Price changes communicated 30 days in advance
                  </li>
                </ul>
              )
            },
            {
              title: "Content Ownership",
              content: "You retain rights to your business data. We retain rights to our platform, design, and code."
            },
            {
              title: "Acceptable Use",
              content: "Don't misuse the Service (spam, illegal activities, reverse engineering, etc.). We may suspend violators."
            },
            {
              title: "Limitations",
              content: "We're not liable for indirect damages or data loss. Maximum liability is limited to fees paid in the last 6 months."
            },
            {
              title: "Changes to Terms",
              content: "We'll notify you of material changes. Continued use after changes constitutes acceptance."
            },
            {
              title: "Contact",
              content: (
                <>
                  Questions? Email{" "}
                  <a href="mailto:legal@clientnesthq.com" className="text-blue-600 hover:underline">
                    support@clientnesthq.com
                  </a>
                </>
              )
            }
          ].map((section, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {index + 1}. {section.title}
              </h2>
              <div className="text-gray-700">
                {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}