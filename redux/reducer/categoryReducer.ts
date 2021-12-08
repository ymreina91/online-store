import { ICategory, IGlobalState, initialState } from "@lib/types";
import { ActionType } from "@redux/action-types";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const categoryReducer = (state: IGlobalState = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return Object.assign({}, state, {
        ...state
      });

    case ActionType.CREATE_CATEGORY:
      return  Object.assign({}, state, {
        categories: [...state.categories ?? [], payload]
      });

    case ActionType.RETRIEVE_CATEGORIES:
      return Object.assign({}, state, {
        ...payload
      });;

    case ActionType.UPDATE_CATEGORY:
      const data = payload as ICategory;
      return state.categories?.map((category: ICategory) => {
        if (category.id === data?.id) {
          return {
            ...state.categories,
            ...data,
          };
        } else {
          return state.categories;
        }
      });

    case ActionType.DELETE_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories?.filter(({ id }) => id !== payload)
      });

    default:
      return state;
  }
};

export default categoryReducer;
