export interface Products {
  id: number;
  brand: null | string;
  name: string;
  price: null | string;
  price_sign: PriceSign | null;
  currency: Currency | null;
  image_link: string;
  product_link: string;
  website_link: string;
  description: null | string;
  rating: number | null;
  category: string | null;
  product_type: string;
  tag_list: string[];
  created_at: Date;
  updated_at: Date;
  product_api_url: string;
  api_featured_image: string;
  product_colors: ProductColor[];
}

export enum Currency {
  CAD = 'CAD',
  Gbp = 'GBP',
  Usd = 'USD',
}

export enum PriceSign {
  Empty = '$',
  PriceSign = '£',
}

export interface ProductColor {
  hex_value: string;
  colour_name: null | string;
}
