import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
      description:
        "Optional: Specify the audience for this category (e.g., 'Women', 'Men', 'Kids').",
        options: {
          list: [
            { title: "Men", value: "men" },
            { title: "Women", value: "women" },
            { title: "Unisex", value: "unisex" },
          ],
        },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "discountedPrice",
      title: "Discounted Price (USD)",
      type: "number",
      description: "Optional: Discounted price for the product.",
    },
    {
      name: "amazonAffiliateLink",
      title: "Amazon Affiliate Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).optional(),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "brand",
      title: "Brand Name",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Average user rating (1-5 stars)",
      validation: (Rule) => Rule.min(1).max(5).optional(),
    },
    {
      name: "reviewsCount",
      title: "Number of Reviews",
      type: "number",
      validation: (Rule) => Rule.min(0).optional(),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      description: "A brief description of the product",
    },
    {
      name: "availability",
      title: "Stock Availability",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "in_stock" },
          { title: "Out of Stock", value: "out_of_stock" },
          { title: "Limited Stock", value: "limited_stock" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional: Sizes for the product, if applicable.",
      options: {
        list: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((size) => ({
          title: size,
          value: size,
        })),
      },
    },
    {
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional: Colors available for the product.",
    },
    {
      name: "fabricType",
      title: "Fabric Type",
      type: "string",
      description: "Optional: Fabric details for gym products, if applicable.",
    },
    {
      name: "careInstructions",
      title: "Care Instructions",
      type: "string",
      description: "Optional: Care instructions for the product.",
    },
    {
      name: "origin",
      title: "Product Origin",
      type: "string",
      description: "Optional: Product origin (e.g., country of manufacture).",
    },
    {
      name: "closureType",
      title: "Closure Type",
      type: "string",
      description: "Optional: Type of closure for gym clothing (e.g., elastic, zipper).",
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "string",
      description: "Optional: Physical dimensions of the product (for equipment).",
    },
    {
      name: "weight",
      title: "Weight",
      type: "number",
      description: "Optional: Weight of the product (for gym equipment).",
    },
    {
      name: "material",
      title: "Material",
      type: "string",
      description: "Optional: Material used for gym-related products (e.g., rubber, metal).",
    },
    {
      name: "isNewArrival",
      title: "New Arrival",
      type: "boolean",
      initialValue: false, // Default value is false
      description: "Set this to true for new arrival products.",
    },
  ],
});
