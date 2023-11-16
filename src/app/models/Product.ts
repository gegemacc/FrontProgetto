import {Category} from "./Category";

export interface Product {

  id: number;

  name: string;

  category: Category;

  price: number;

  image: string;

  stock: number;

  status: string;

  description: string;

  created: string;

  updated: string;

}
