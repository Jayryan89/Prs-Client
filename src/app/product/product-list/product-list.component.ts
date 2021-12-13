import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  searchCriteria: string = "";

  constructor(
    private productservice: ProductService,
    private sys : SystemService
  ) { }

  ngOnInit(): void {
    this.productservice.list().subscribe(
      res => {
        console.log(res);
        this.products = res as Product[]

      },
      err => {
        console.error(err);
      }

    );
  }
  }