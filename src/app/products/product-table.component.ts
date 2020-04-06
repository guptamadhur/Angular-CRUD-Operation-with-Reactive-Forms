import { Component, OnInit } from "@angular/core";

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-table.component.html",
  styleUrls: ["./product-table.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product Table";
  errorMessage = "";

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
