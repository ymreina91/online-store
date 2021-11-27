import {IAction, IArticle, IGlobalState, initialState} from '@lib/types';
import {ActionType} from "@redux/action-types";

const articleReducer = (state: IGlobalState = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CREATE_ARTICLE:
      return [...state.articles ?? [], payload];

    case ActionType.RETRIEVE_ARTICLES:
      return payload;

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
      return state.articles?.filter(({ id }) => id !== payload);

    default:
      return state.articles;
  }
};

export default articleReducer;
