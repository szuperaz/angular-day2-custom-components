import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './product.service';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      resp => this.products = _.shuffle([...resp.cactusFamilies, ...resp.embroideries, ...resp.knittedAnimals])
    );
  }
}
