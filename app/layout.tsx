import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "VeeChat - AI Chat Assistant",
  description: "Chat with AI powered by Llama 3.3 70B via Groq's ultra-fast inference. Get instant, intelligent responses in a beautiful, modern interface.",
  keywords: ["AI chat", "Llama 3.3", "Groq", "chatbot", "AI assistant", "VeeChat"],
  authors: [{ name: "Vishal Patel" }],
  creator: "Vishal Patel",
  openGraph: {
    title: "VeeChat - AI Chat Assistant",
    description: "Chat with AI powered by Llama 3.3 70B",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeeChat - AI Chat Assistant",
    description: "Chat with AI powered by Llama 3.3 70B",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
