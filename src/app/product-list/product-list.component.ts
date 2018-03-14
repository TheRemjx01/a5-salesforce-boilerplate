import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import Product from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAll().then(products => {
      console.log('Test res: ', products);
      this.products = products;
    });
  }

}
