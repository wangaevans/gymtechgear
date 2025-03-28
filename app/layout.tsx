import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from 'react-hot-toast';
import ClientProviders from "./components/ClientProviders";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAdSense } from "next-google-adsense";
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: 'Gymtechgear',
  description: 'Innovative Fitness Solutions',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <GoogleAdSense publisherId="pub-8281092193891669" /> 
        <Header />
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        {children}
        <ClientProviders />
        <Footer />
      </body>
    </html>
  );
}
