import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from 'react-hot-toast';
import ClientProviders from "./components/ClientProviders";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAdSense } from "next-google-adsense";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch categories at build time
  // const categories = await client.fetch(allCategoriesQuery);

  return (
      <html lang="en">
        <head>
          <meta name="robots" content="index, follow">
        </head>
        <body>
          <Analytics/>
            <GoogleAdSense publisherId="pub-8281092193891669" /> 
          <Header />
          <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
          {children}
          <ClientProviders/>
          <Footer />
        </body>
      </html>
      
  );
}
