import {Category} from '../constants/category.enum';
export interface IData {
  place: string;
  price: number;
  time: Date;
  type: Category;
  userName: string;
}
