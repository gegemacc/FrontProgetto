import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product";
import {ProductControllerService} from "../../services/product-controller.service";
import {CartControllerService} from "../../services/cart-controller.service";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {} as Product;
  category = {} as Category;
  private id?: string;

  constructor(private route: ActivatedRoute, private productService: ProductControllerService, private cartService: CartControllerService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id = params['id'];
      this.loadProduct();
    });
  }
  loadProduct() {
    if (this.id) {
      this.productService.getProductById(this.id).subscribe(data => {
        this.product = data;
        this.category = this.product.category;
      });
    }
  }

  addToCart(product: Product) {
      this.cartService.addToCart(product.id, 1).subscribe();
      window.location.reload();
  }
}
