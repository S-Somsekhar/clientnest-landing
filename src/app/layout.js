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
  keywords: ['CRM', 'ClientNest', 'Lead Management', 'Sales Tool', 'Pipeline CRM', 'CRM for individuals', 'CRM at $10'],
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
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5BJJRCYVL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5BJJRCYVL');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Tawk.to Live Chat Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/684d0d796b65fa190ea6e6e2/1itmfp8um';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
