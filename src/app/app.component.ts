import { Component, OnInit } from '@angular/core';
import { CactusFamily } from './models/cactus-family';
import { Embroidery } from './models/embroidery';
import { KnittedAnimal } from './models/knitted-animal';
import { ProductService } from './product.service';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  products: (KnittedAnimal | Embroidery | CactusFamily)[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      resp => this.products = _.shuffle([...resp.cactusFamilies, ...resp.embroideries, ...resp.knittedAnimals])
    );
  }
}
