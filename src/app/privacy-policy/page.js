import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – ClientNest",
  description: "How we protect and handle your data at ClientNest.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full bg-white min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Privacy Policy
            </span>
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>Last updated: June 10, 2025</span>
            <span>•</span>
            <Link href="/terms" className="text-blue-600 hover:underline">
              View Terms
            </Link>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-blue max-w-none mb-12">
          <p className="text-gray-700">
            At <strong>ClientNest</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we&apos;re committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights regarding that information.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {[
            {
              title: "Information We Collect",
              content: (
                <ul className="space-y-2 pl-5">
                  <li className="relative">
                    <strong>Account Data:</strong> Name, email, billing details
                  </li>
                  <li className="relative">
                    <strong>Business Data:</strong> Leads, contacts, and deal information you enter
                  </li>
                  <li className="relative">
                    <strong>Technical Data:</strong> IP address, device info, usage analytics
                  </li>
                </ul>
              )
            },
            {
              title: "How We Use Your Information",
              content: "To provide and improve our services, process payments, communicate with you, and ensure platform security. We never sell your data."
            },
            {
              title: "Data Sharing & Third Parties",
              content: "We only share data with essential service providers (like payment processors) under strict confidentiality agreements. Full list available upon request."
            },
            {
              title: "Your Rights",
              content: (
                <>
                  You may access, correct, or delete your data. EU (GDPR) and California (CCPA) residents have additional rights. Email{" "}
                  <a href="mailto:privacy@clientnesthq.com" className="text-blue-600 hover:underline">
                    privacy@clientnesthq.com
                  </a>{" "}
                  for requests.
                </>
              )
            },
            {
              title: "Security Measures",
              content: "We use SSL encryption, regular security audits, and role-based access controls to protect your information."
            },
            {
              title: "Changes to This Policy",
              content: "We'll notify you of significant changes via email or in-app notice. Continued use after updates constitutes acceptance."
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