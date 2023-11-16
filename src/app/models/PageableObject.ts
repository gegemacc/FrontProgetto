import {SortObject} from "./SortObject";

export interface PageableObject {
  pageNumber: number;
  pageSize: number;
  sort: SortObject;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}
