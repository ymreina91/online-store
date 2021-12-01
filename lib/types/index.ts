export const initialState: IGlobalState = {
  articles: [],
  departments: [],
  categories: [],
};

type IPayload =
  | number
  | string
  | IArticle
  | ICategory
  | IDepartments
  | Object[];

export interface IArticle {
  id: number;
  name: string;
  value: number;
  deptoId: number;
  category: number[];
}

export interface ICategory {
  id: number;
  name: string;
  deptoId: number;
}

export interface IDepartments {
  id: number;
  name: string;
}

export interface IAction {
  type: string;
  payload?: IPayload;
}

export interface IGlobalState {
  articles?: IArticle[];
  categories?: ICategory[];
  departments?: IDepartments[];
}

export interface IPropsNavBar {
  sidebar?: boolean;
  setSidebar: Function;
}



