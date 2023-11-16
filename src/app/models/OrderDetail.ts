import {CartItem} from "./CartItem";
import {Product} from "./Product";

export interface OrderDetail {

  id: number

  product: Product

  quantity: number
}
