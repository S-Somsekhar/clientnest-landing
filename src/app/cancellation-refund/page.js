import Link from "next/link";
export const metadata = {
  title: "Cancellation & Refund Policy – ClientNest",
  description: "How cancellations and refunds work at ClientNest.",
};

export default function CancellationRefundPage() {
  return (
    <section className="w-full bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Cancellation & Refund Policy</h1>
        <p className="mb-4">Last updated: June 10, 2025</p>

        <p className="mb-4">
          You may cancel your subscription to ClientNest at any time through your account settings. Once cancelled, your access will continue until the end of the billing cycle.
        </p>

        <p className="mb-4">
          We do not offer automatic refunds. However, if you believe you are entitled to one due to technical or service-related issues, please reach out to our support team. Refunds are handled on a case-by-case basis.
        </p>

        <p className="mb-4">
          For any cancellation or refund concerns, contact us at <a href="mailto:support@clientnesthq.com" className="text-blue-600 underline">support@clientnesthq.com</a>
        </p>

        <Link href="/" className="inline-block mt-10 text-blue-900 font-medium underline">
          ← Back to Homepage
        </Link>
      </div>
    </section>
  );
}
