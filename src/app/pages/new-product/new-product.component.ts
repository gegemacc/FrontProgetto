import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {Product} from "../../models/Product";
import {ProductControllerService} from "../../services/product-controller.service";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Category} from "../../models/Category";
import {faCloudUpload, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryControllerService} from "../../services/category-controller.service";
import {ProductCreate} from "../../models/ProductCreate";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categories: Category[] = [];

  isNewProduct = true;

  product = {} as ProductCreate;

  productId = 0;

  selectedCategory = {} as Category;

  constructor(private dialogRef: MatDialogRef<NewProductComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private productService: ProductControllerService,
              private categoryService: CategoryControllerService) {
    if(data) {
      this.product = data.product;
      this.productId = data.product.id;
      this.isNewProduct = false;
      this.selectedCategory = this.product.category;
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }


  onCategoryChange(selectedCategory: any) {
    console.log(selectedCategory);
  }

  submit(productForm: NgForm) {
    const observer = {
      next: (response: Product) => {
        productForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    };

    if(this.isNewProduct) {
      this.productService.addProduct(productForm.value).subscribe(observer);
    } else {
      this.productService.editProduct(this.productId, productForm.value).subscribe(observer);
    }
  }
}

