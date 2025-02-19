import { defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
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
      name: "description",
      title: "Category Description",
      type: "text",
      description: "A brief description of this category",
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: { hotspot: true },
      description: "Image representing this category.",
    },
    {
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "If this category is a subcategory, select the parent category.",
    },
    {
      name: "isFeatured",
      title: "Featured Category",
      type: "boolean",
      description: "Mark this category as featured to highlight it in certain sections.",
    },
    {
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
      description:
        "Optional: Specify the audience for this category (e.g., 'Women', 'Men', 'Kids').",
    },
    {
      name: "categoryType",
      title: "Category Type",
      type: "string",
      options: {
        list: [
          { title: "Gym Apparel", value: "gym_apparel" },
          { title: "Gym Equipment", value: "gym_equipment" },
          { title: "Sports Nutrition", value: "sports_nutrition" },
          { title: "Accessories", value: "accessories" },
        ],
      },
      description: "Optional: Select the category type, if applicable.",
    },
    {
      name: "brand",
      title: "Brand Name",
      type: "string",
      description: "Optional: Specify a brand that may be associated with this category.",
    },
    {
      name: "productCount",
      title: "Number of Products",
      type: "number",
      description:
        "Optional: Track the number of products within this category for internal purposes.",
    },
  ],
});
