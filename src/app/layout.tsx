import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { FloatingContact } from "@/components/layout/floating-contact";
import { COMPANY_INFO } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}. We are a leading manufacturer of premium quality industrial cables, control cables, LT power cables, and conductors based in Hyderabad, Telangana, India. ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified.`,
  keywords: [
    "cable manufacturer",
    "wire manufacturer",
    "industrial cables",
    "control cables",
    "LT power cables",
    "instrumentation cables",
    "solar cables",
    "house wires",
    "flexible cables",
    "cable supplier Hyderabad",
    "cable manufacturer India",
    "Sree Manikanta Cables",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://www.sreemanikantacables.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description: `Premium manufacturer of wires, cables, and conductors. ${COMPANY_INFO.address}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
    description: `Premium manufacturer of wires, cables, and conductors.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('darkMode');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored ? JSON.parse(stored) : prefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}