import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScroll from "@/components/animations/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashis Acharya - Full Stack Developer | MERN & Next.js",
  description: "Full Stack Developer specializing in Next.js and the MERN stack, with production experience building SaaS platforms, ecommerce systems, and real-time web applications.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "Node.js", "TypeScript", "Web Development", "Ashis Acharya"],
  authors: [{ name: "Ashis Acharya" }],
  creator: "Ashis Acharya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashisacharya.com",
    title: "Ashis Acharya - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js and the MERN stack, building scalable web applications with clean code and modern architecture.",
    siteName: "Ashis Acharya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashis Acharya - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js and the MERN stack",
    creator: "@aashis06",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
