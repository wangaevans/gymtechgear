import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProductDetails from "../components/ProductDetails";
import { Product } from "@/types/product";

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  // Fetch product data from Sanity in the Server Component
  const product: Product | null = await client.fetch(productBySlugQuery, { 
    slug: params.slug 
  });

  if (!product) {
    notFound();
  }
  return <ProductDetails product={product} />;
}