import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScroll from "@/components/animations/smooth-scroll";
import { Analytics, GoogleAnalytics } from "@/components/analytics";
import CustomCursor from "@/components/ui/custom-cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Viewport configuration for proper mobile scaling
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ashisacharya.com'),
  title: {
    default: "Ashis Acharya - Full Stack Developer | MERN & Next.js",
    template: "%s | Ashis Acharya"
  },
  description: "Full Stack Developer specializing in Next.js and the MERN stack. Building production-ready SaaS platforms, ecommerce systems, and scalable web applications. 1000+ daily active users. Open to opportunities.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Development",
    "SaaS Development",
    "Ecommerce Development",
    "Ashis Acharya",
    "Nepal Developer",
    "Bhaktapur Developer",
    "Hire Full Stack Developer"
  ],
  authors: [{ name: "Ashis Acharya", url: "https://ashisacharya.com" }],
  creator: "Ashis Acharya",
  publisher: "Ashis Acharya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashisacharya.com",
    title: "Ashis Acharya - Full Stack Developer | MERN & Next.js",
    description: "Full Stack Developer building production-ready web applications. Specialized in Next.js, React, Node.js, and MongoDB. 4+ projects delivered, 1000+ daily users.",
    siteName: "Ashis Acharya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashis Acharya - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashis Acharya - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js and the MERN stack. Building scalable web applications.",
    creator: "@aashis06",
    images: ["/og-image.png"],
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
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)} suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="min-h-screen bg-background text-foreground cursor-none">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
