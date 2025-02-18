export type Category = {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    description?: string;
    image?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    parentCategory?: {
      _id: string;
      name: string;
    };
    isFeatured?: boolean;
    targetAudience?: string;
    categoryType?: string;
    brand?: string;
    productCount?: number;
  };
  