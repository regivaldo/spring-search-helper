import { Pageable } from './pageable';

export class List<T> {
  content: T[];
  pageable: Pageable;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
