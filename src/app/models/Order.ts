import {OrderDetail} from "./OrderDetail";
import {Address} from "./Address";


export interface Order {

  id: number;

  details: OrderDetail[];

  phone: string,

  state: string,

  region: string,

  city: string,

  street: string,

  orderDate: string;

  grandTotal: number;

}
