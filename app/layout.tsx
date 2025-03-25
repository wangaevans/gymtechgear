import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from 'react-hot-toast';
import ClientProviders from "./components/ClientProviders";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch categories at build time
  // const categories = await client.fetch(allCategoriesQuery);

  return (
      <html lang="en">
        <body>
          <Analytics/>
          <Header />
          <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
          {children}
          <ClientProviders/>
          <Footer />
       <Script 
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8281092193891669"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        </body>
      </html>
      
  );
}
