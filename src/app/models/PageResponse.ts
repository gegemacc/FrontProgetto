import {Product} from "./Product";
import {PageableObject} from "./PageableObject";
import {SortObject} from "./SortObject";

export interface PageResponse {
  content: Product[];
  pageable: PageableObject;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortObject;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
