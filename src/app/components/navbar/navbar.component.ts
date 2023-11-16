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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchQuery='';
  cart = {} as Cart;

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
    this.authService.logout().subscribe({
        next: response => {
            console.log('LOGOUT SUCCES')
        },
        error: error => {
            console.log(error);
        }
    });
  }

  updateCart() {
    this.cartService.getCart().subscribe(
      data => this.cart = data
    )
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
