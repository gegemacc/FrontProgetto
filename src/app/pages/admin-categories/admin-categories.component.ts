import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {MatDialog} from "@angular/material/dialog";
import {CategoryControllerService} from "../../services/category-controller.service";
import {ProductControllerService} from "../../services/product-controller.service";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {NewProductComponent} from "../new-product/new-product.component";
import {NewCategoryComponent} from "../new-category/new-category.component";


@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements  OnInit {

  addIcon = faPlusCircle;
  constructor(public matDialog: MatDialog, public categoryService: CategoryControllerService) {}

  categories: Category[] = [];
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }


  editCategory(category: Category) {
    this.matDialog.open(NewCategoryComponent, {
      data: {category}
    }).afterClosed().subscribe(response => this.getCategories());
  }



  openCategoryDialog() {
    this.matDialog.open(NewCategoryComponent).afterClosed().subscribe(response => this.getCategories());
  }
}
