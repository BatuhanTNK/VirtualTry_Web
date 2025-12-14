export interface Product {
  id: string;
  name: string;
  category: string;
  image_url: string;
  model_url: string;
  price?: number;         
  scale_factor?: number;   
}