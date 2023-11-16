import {User} from "./User";
import {Product} from "./Product";
import {Cart} from "./Cart";

export interface CartItem {

  id: number;

  product: Product;

  quantity: number;

  subTotal: number;

  cart: Cart;


}
