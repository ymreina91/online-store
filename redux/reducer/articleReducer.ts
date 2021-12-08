import {IArticle, IGlobalState, initialState} from '@lib/types';
import {ActionType} from "@redux/action-types";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const articleReducer = (state: IGlobalState = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return Object.assign({}, state, {
        ...state
      });

    case ActionType.CREATE_ARTICLE:
      return  Object.assign({}, state, {
        articles: [...state.articles ?? [], payload]
      });

    case ActionType.RETRIEVE_ARTICLES:
      return Object.assign({}, state, {
        ...payload
      });

    case ActionType.UPDATE_ARTICLE:
      const data = payload as IArticle;
      return state.articles?.map((article: IArticle) => {
        if (article.id === data?.id) {
          return {
            ...state.articles,
            ...data,
          };
        } else {
          return state.articles;
        }
      });

    case ActionType.DELETE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles?.filter(({ id }) => id !== payload)
      });

    default:
      return state;
  }
};

export default articleReducer;
