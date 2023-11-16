import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../models/CartItem";
import {CartControllerService} from "../../services/cart-controller.service";
import {Cart} from "../../models/Cart";
import {ActivatedRoute} from "@angular/router";
import {
  faMinusSquare,
  faPlusSquare,
  faXmarkSquare
} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = {} as Cart;

  minusIcon = faMinusSquare;
  plusIcon = faPlusSquare;
  removeIcon = faXmarkSquare;

  constructor(private route: ActivatedRoute, private cartService: CartControllerService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.cartDetails();
    })
  }

  cartDetails() {
    this.cartService.getCart().subscribe(this.processResult());
  }

  editQuantity(cartItemId: number, oldQuantity: number, newQuantity: number) {
    this.cartService.editCart(cartItemId, oldQuantity, newQuantity).subscribe(this.processResult());
    this.cartDetails();
    window.location.reload();
  }

  remove(cartItem: CartItem) {
    this.cartService.deleteFromCart(cartItem.id).subscribe();
    this.cartDetails();
    window.location.reload();
  }

  processResult() {
    return (data: any) => {
      this.cart = data;
    }
  }

  getQuantity() {
    return this.cart.quantity;
  }

  getGrandTotal() {
    return this.cart.grandTotal;
  }
}
