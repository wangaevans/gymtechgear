// @/types/product.ts
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
    amazonAffiliateLink?: string;
  }