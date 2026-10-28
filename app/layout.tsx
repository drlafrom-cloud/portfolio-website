import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Randall LaFrom, DDS | Senior Dental Business Strategy Advisor",
  description:
    "34-year private practice owner & dental business strategy consultant. Advising dental practices and groups on revenue growth, patient acquisition, scheduling optimization, and operational performance.",
  keywords: [
    "Randall LaFrom",
    "Dental Business Strategy Advisor",
    "Dental Consultant",
    "Dental Practice Owner",
    "Dentistry Growth Strategy",
    "Dental Site Authority",
    "Integrity Dental Marketing",
  ],
  authors: [{ name: "Randall LaFrom, DDS" }],
  openGraph: {
    title: "Randall LaFrom, DDS | Dental Business Strategy Advisor",
    description:
      "Combining 34 years of clinical practice ownership with 25+ years of dental business and marketing strategy.",
    url: "https://www.linkedin.com/in/randylafrom/",
    siteName: "Dr. Randall LaFrom Portfolio",
    images: [
      {
        url: "/randy-lafrom.png",
        width: 400,
        height: 400,
        alt: "Randall LaFrom, DDS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=erode@400,401,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 bg-[#fbfcfd] text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
