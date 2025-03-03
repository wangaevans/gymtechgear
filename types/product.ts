export type Product = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  description?: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  category?: string;
  brand?: string;
  rating?: number;
  amazonAffiliateLink?: string;
  size?: string[];
  color?: string[];
  isNewArrival?: boolean;
};
