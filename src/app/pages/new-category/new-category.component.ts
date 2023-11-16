import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Product} from "../../models/Product";
import {HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../models/Category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductControllerService} from "../../services/product-controller.service";
import {CategoryControllerService} from "../../services/category-controller.service";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  category = {} as Category;
  id : number = 0;

  isNewCategory = true;
  ngOnInit(): void {
  }

  constructor(private dialogRef: MatDialogRef<NewCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private categoryService: CategoryControllerService) {
    if(data) {
      this.category= data.category;
      this.id = data.category.id;
      this.isNewCategory = false;
    }
  }

  submit(categoryForm: NgForm) {
    if(this.isNewCategory) {
      this.categoryService.addCategory(categoryForm.value).subscribe(
        (response: Category) => {
          categoryForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );
    } else {
      this.categoryService.editCategory(this.id, categoryForm.value).subscribe(
        (response) => {
          categoryForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );
    }
  }

}
