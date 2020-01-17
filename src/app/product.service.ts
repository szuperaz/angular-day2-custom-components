import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Type } from './models/product';
import { ProductResponse } from './models/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<ProductResponse> {
    return of({
      cactusFamilies: [
        {
          id: 0,
          name: 'Colorful Cactus Family',
          price: 6000,
          description: 'Hand-knitted cute cacti',
          imageUrl: '/assets/cactus_family_4.png',
          type: Type.CACTUS_FAMILY,
          membersCount: 4,
          story: 'No two cacti looks the same in this family, but they still belong together',
          isOnSale: false
        },
        {
          id: 1,
          name: 'Lonely Cactus',
          price: 3000,
          description: 'Hand-knitted cute cacti',
          imageUrl: '/assets/lonely_cactus.png',
          type: Type.CACTUS_FAMILY,
          membersCount: 1,
          story: 'This cactus is lonely, will you be her friend?',
          isOnSale: true
        },
        {
          id: 2,
          name: 'Cactus Dynasty',
          price: 50000,
          description: 'Hand-knitted cute cacti',
          imageUrl: '/assets/cactus_dynasty.png',
          type: Type.CACTUS_FAMILY,
          membersCount: 37,
          story: 'The royal cactus dynasty',
          isOnSale: false
        }
      ],
      embroideries: [
        {
          id: 3,
          name: 'Mr. Cat',
          price: 2500,
          description: 'Embroidered small picture',
          imageUrl: '/assets/cat_embroidery.png',
          type: Type.EMBROIDERY,
          contentDescription: 'This is a serious cat looking for a serious friend',
          isOnSale: true
        },
        {
          id: 4,
          name: 'Sea Life',
          price: 3000,
          description: 'Embroidered small picture',
          imageUrl: '/assets/sea_embroidery.png',
          type: Type.EMBROIDERY,
          contentDescription: 'Sea life on textile',
          isOnSale: false
        }
      ],
      knittedAnimals: [
        {
          id: 5,
          name: 'Kitten',
          price: 4000,
          description: 'Knitted animal heads',
          imageUrl: '/assets/knitted_cat.png',
          type: Type.KNITTED_ANIMAL,
          animalType: 'Kitten - because they are officially the coolest animals',
          isOnSale: false
        },
        {
          id: 6,
          name: 'Bear',
          price: 5000,
          description: 'Knitted animal heads',
          imageUrl: '/assets/knitted_bear.png',
          type: Type.KNITTED_ANIMAL,
          animalType: 'Bears - not as cool as cats, but they are still cool',
          isOnSale: false
        }
      ]
    }).pipe(delay(500));
  }
}
