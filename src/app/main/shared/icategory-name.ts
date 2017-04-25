import {Category} from '../constants/category.enum';
export interface ICategoryName {
  id: Category;
  name: string;
  price?: number;
}
