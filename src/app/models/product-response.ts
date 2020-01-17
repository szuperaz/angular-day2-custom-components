import { CactusFamily } from './cactus-family';
import { Embroidery } from './embroidery';
import { KnittedAnimal } from './knitted-animal';

export class ProductResponse {
  cactusFamilies: CactusFamily[];
  embroideries: Embroidery[];
  knittedAnimals: KnittedAnimal[];
}
