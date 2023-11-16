import {Category} from "./Category";

export interface ProductCreate {

  name: string;

  category: Category;

  price: number;

  image: string;

  stock: number;

  description: string;

}
