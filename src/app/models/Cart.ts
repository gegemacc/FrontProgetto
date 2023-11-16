import {Product} from "./Product";
import {User} from "./User";
import {CartItem} from "./CartItem";

export interface Cart {

  id: string;

  items: CartItem[];

  quantity: number;

  grandTotal: number;

}
