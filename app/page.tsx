// app/page.tsx
import { allCategoriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import HomePage from "./components/HomePage";

export default async function Page() {
  // Fetch categories at build time
  const categories = await client.fetch(allCategoriesQuery);

  return <HomePage categories={categories} />;
}