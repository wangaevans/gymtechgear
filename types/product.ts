// @/types/product.ts
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    slug: { current: string };
    image: {
      asset: {
        [x: string]: string | undefined;
        _ref: string;
      };
    };
    amazonAffiliateLink?: string;
  }