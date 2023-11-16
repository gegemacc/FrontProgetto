import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";
import {ProductControllerService} from "../../services/product-controller.service";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../../models/Category";
import {CategoryControllerService} from "../../services/category-controller.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  pageNumber: number = 1;
  pageSize: number = 12;
  elementsNumber: number = 0;

  searchIcon = faMagnifyingGlass;
  selectedCategory: any;
  categories: Category[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductControllerService, private categoryService: CategoryControllerService) {}

  ngOnInit(): void {
    this.getCategories();
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })

  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  updatePageSize(value: string) {
      this.pageSize = +value;
      this.pageNumber = 1;
      this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data.content;
      this.pageSize = data.size;
      this.pageNumber = data.number + 1;
      this.elementsNumber = data.totalElements;
    }
  }

  listProducts() {
    this.productService.getAllProducts(this.pageNumber - 1, this.pageSize,"").subscribe(this.processResult());
  }

  searchForQuery(query: string) {
    this.productService.getAllProducts(this.pageNumber - 1,this.pageSize,query).subscribe(this.processResult());
  }


  onCategoryChange(selectedCategory: any) {
    this.getProductsByCategory();
    console.log(this.selectedCategory);
  }

  getProductsByCategory() {
    this.productService.getAllProductsByCategory(this.selectedCategory.id).subscribe(data => this.products = data);
  }


}
