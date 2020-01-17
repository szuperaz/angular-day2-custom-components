export enum Type {
  CACTUS_FAMILY= 'CACTUS_FAMILY',
  KNITTED_ANIMAL= 'KNITTED_ANIMAL',
  EMBROIDERY= 'EMBROIDERY'
}

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: Type;
  isOnSale: boolean;
}
