import Link from "next/link";
export const metadata = {
  title: "Shipping & Delivery Policy – ClientNest",
  description: "Digital delivery details of ClientNest services.",
};

export default function ShippingDeliveryPage() {
  return (
    <section className="w-full bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Shipping & Delivery Policy</h1>
        <p className="mb-4">Last updated: June 10, 2025</p>

        <p className="mb-4">
          ClientNest is a digital SaaS platform. We do not sell or ship any physical goods.
        </p>

        <p className="mb-4">
          Upon successful subscription and payment, users get immediate access to our platform. All services are delivered online and accessible through your registered account.
        </p>

        <p className="mb-4">
          If you are unable to access the service after payment, please contact our support team.
        </p>
        <p className="mb-4">
          No shipping required
        </p>

        <Link href="/" className="inline-block mt-10 text-blue-900 font-medium underline">
          ← Back to Homepage
        </Link>
      </div>
    </section>
  );
}
