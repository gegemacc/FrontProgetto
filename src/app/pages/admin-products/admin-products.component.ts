import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryControllerService} from "../../services/category-controller.service";
import {Product} from "../../models/Product";
import {ProductControllerService} from "../../services/product-controller.service";
import {faCartShopping, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {NewProductComponent} from "../new-product/new-product.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements  OnInit {

  constructor(public matDialog: MatDialog, public categoryService: CategoryControllerService, public productService: ProductControllerService) {}

  addIcon = faPlusCircle;

  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory = {} as Category;
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }


  onCategoryChange(selectedCategory: any) {
    this.getProducts();
    console.log(this.selectedCategory);
  }

  getProducts() {
    this.productService.getAllProductsByCategory(this.selectedCategory.id).subscribe(data => this.products = data);
  }

  deleteProductById(id: number) {
    this.productService.deleteProduct(id).subscribe();
    window.location.reload();
  }

  editProduct(product: Product) {
    this.matDialog.open(NewProductComponent, {
      data: {product}
    }).afterClosed().subscribe(response => this.getProducts());
  }

  openProductDialog() {
    this.matDialog.open(NewProductComponent).afterClosed().subscribe(response => this.getProducts());
  }
}

