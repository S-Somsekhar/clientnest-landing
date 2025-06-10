import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ClientNest – Close More Clients, Effortlessly',
  description: 'Ditch spreadsheets. Organize your leads, follow-ups, and deals – all in one smart CRM.',
  keywords: ['CRM', 'ClientNest', 'Lead Management', 'Sales Tool', 'Pipeline CRM'],
  authors: [{ name: 'ClientNest Team', url: 'https://clientnesthq.com' }],
  openGraph: {
    title: 'ClientNest – Lightweight CRM to Close More Clients',
    description: 'Supercharge your lead management with a clean, simple CRM.',
    url: 'https://clientnesthq.com',
    siteName: 'ClientNest',
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
