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

export interface IPropsHeaderContent {
  title?: string;
  weight?: number;
  size?: string;
  textTransform?: any;
  children?: any;
}

export interface IPropsRadioGroupCustom {
  checked: boolean;
  setChecked: Function;
  items?: String[];
  children?: any;
}

export interface IPropsImageTopButton {
  imgURL?: string;
  children?: any;
}

export interface IPropsCardCustom {
  imgURL?: string;
  title?: string;
  subtitle?: string;
  textDescription?: string;
  items?: String[];
  itemsMore?: String[];
  data?: string;
  children?: any;
}



