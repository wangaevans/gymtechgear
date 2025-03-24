import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from 'react-hot-toast';
import ClientProviders from "./components/ClientProviders";
import { Analytics } from "@vercel/analytics/react"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch categories at build time
  // const categories = await client.fetch(allCategoriesQuery);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Analytics/>
          <Header />
          <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
          {children}
          <ClientProviders/>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}