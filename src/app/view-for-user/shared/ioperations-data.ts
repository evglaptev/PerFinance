import {Category} from '../constants/category.enum';
export interface IOperationsData {
  place: string;
  price: number;
  time: Date;
  type: Category;
  userName: string;
}
