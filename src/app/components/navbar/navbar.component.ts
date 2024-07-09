import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  faCartShopping,
  faLeftLong,
  faMagnifyingGlass,
  faRightFromBracket, faRightToBracket,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {AuthControllerService} from "../../services/auth-controller.service";
import {NgForm} from "@angular/forms";
import {CartControllerService} from "../../services/cart-controller.service";
import {Cart} from "../../models/Cart";
import {ProductControllerService} from "../../services/product-controller.service";
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchQuery='';
  cart = {} as Cart;
  pageNumber: number = 1;
  pageSize: number = 12;
  elementsNumber: number = 0;
  products: Product[] = [];
  searchIcon = faMagnifyingGlass;
  loginIcon = faRightToBracket;
  cartIcon = faCartShopping;
  profileIcon= faUserCircle;
  logoutIcon = faRightFromBracket;

  constructor(private router: Router, private authService: AuthControllerService, private cartService: CartControllerService, private productService: ProductControllerService) {}

  ngOnInit(): void {
    if(this.isLoggedIn() && !this.isAdmin()) {
      this.updateCart();
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']).then();
  }

  updateCart() {
    this.cartService.getCart().subscribe(
      data => this.cart = data
    )
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  searchForQuery(query: string) {
    this.productService.getAllProducts(this.pageNumber - 1,this.pageSize,query).subscribe(this.processResult());
  }
  processResult() {
    return (data: any) => {
      this.products = data.content;
      this.pageSize = data.size;
      this.pageNumber = data.number + 1;
      this.elementsNumber = data.totalElements;
    }
  }
}
