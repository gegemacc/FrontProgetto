import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CartControllerService} from "../../services/cart-controller.service";
import {Cart} from "../../models/Cart";
import {OrderDTO} from "../../models/OrderDTO";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor (
    private router: Router,
    private cartService: CartControllerService,
    private formBuilder: FormBuilder) { }

  checkoutFormGroup!: FormGroup;

  cart = {} as Cart;
  isDisabled: boolean=false;
  shippingAddress: any;


  onSubmit() {
    let order = new OrderDTO();
    this.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
    order.phone = JSON.parse(JSON.stringify(this.shippingAddress.phone));
    order.state = JSON.parse(JSON.stringify(this.shippingAddress.state));
    order.region = JSON.parse(JSON.stringify(this.shippingAddress.region));
    order.city = JSON.parse(JSON.stringify(this.shippingAddress.city));
    order.street = JSON.parse(JSON.stringify(this.shippingAddress.street));
    this.cartService.checkout(order).subscribe({
      next: (response: any) => {
        alert(`Il tuo ordine è stato ricevuto!`);
        this.isDisabled = true;
        this.router.navigate(['/']).then();
      },
      error: (err: any) => {
        alert(`Error: ${ err.message }`);
        this.isDisabled = false;
      }
    });
  }

  ngOnInit(): void {
    this.reviewCart();
    this.checkoutFormGroup = this.formBuilder.group({
      shippingAddress: this.formBuilder.group({
        phone: new FormControl(''),
        state: new FormControl(''),
        region: new FormControl(''),
        city: new FormControl(''),
        street: new FormControl(''),
      }),
    });
  }

  private reviewCart() {
    this.cartService.getCart().subscribe(
      cart => this.cart = cart
    );
  }
}
