// import {defineQuery} from 'next-sanity'

// export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
//   _id, title, slug
// }`)

// export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
//   title, body, mainImage
// }`)
import { groq } from "next-sanity";

// Query to fetch all categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    image {
      asset-> {
        _id,
        url
      }
    },
    parentCategory-> {
      _id,
      name
    },
    isFeatured,
    targetAudience,
    categoryType,
    brand,
    productCount
  }
`;

// Query to fetch a single category by slug
export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    image {
      asset-> {
        _id,
        url
      }
    },
    parentCategory-> {
      _id,
      name
    },
    isFeatured,
    targetAudience,
    categoryType,
    brand,
    productCount
  }
`;

// Query to fetch all products in a specific category
export const productsInCategoryQuery = groq`
  *[_type == "product" && category._ref == $categoryId] | order(name asc) {
    _id,
    name,
    slug,
    price,
    description,
    image {
      asset-> {
        _id,
        url
      }
    },
    category-> {
      _id,
      name
    },
    brand,
    rating,
    price,
    amazonAffiliateLink,
    size,
    color
  }
`;

// Query to fetch featured categories (those marked as featured)
export const featuredCategoriesQuery = groq`
  *[_type == "category" && isFeatured == true] | order(name asc) {
    _id,
    name,
    slug,
    image {
      asset-> {
        _id,
        url
      }
    },
    productCount
  }
`;

// Query to fetch product details by product slug
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    description,
    price,
    image {
      asset-> {
        _id,
        url
      }
    },
    brand,
    rating,
    amazonAffiliateLink,
    size,
    color,
    category-> {
      _id,
      name
    }
  }
`;


// Query to fetch new arrivals
export const newArrivalsQuery = groq`
  *[_type == "product" && isNewArrival == true] | order(_createdAt desc) {
    _id,
    name,
    price,
    image {
      asset-> {
        url
      }
    },
    slug
  }
`