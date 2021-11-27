import {articleServices} from "@lib/services"
import {IArticle} from "@lib/types";
import {Dispatch} from "redux";
import {
  ActionType
} from "@redux/action-types";

const createArticle = (data: IArticle) => async (dispatch: Dispatch) => {
  try {
    const res = await articleServices.create(data);
    dispatch({
      type: ActionType.CREATE_ARTICLE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const retrieveArticles = () => async (dispatch: Dispatch) => {
  try {
    const res = await articleServices.getAll();
    dispatch({
      type: ActionType.RETRIEVE_ARTICLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateArticle = (id: number, data: IArticle) => async (dispatch: Dispatch) => {
  try {
    const res = await articleServices.update(id, data);

    dispatch({
      type: ActionType.UPDATE_ARTICLE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const deleteArticle = (id: number) => async (dispatch: Dispatch) => {
  try {
    await articleServices.remove(id);

    dispatch({
      type: ActionType.DELETE_ARTICLE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

const findArticlesByName = (name: string) => async (dispatch: Dispatch) => {
  try {
    const res = await articleServices.findByName(name);

    dispatch({
      type: ActionType.RETRIEVE_ARTICLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export default {
  createArticle,
  retrieveArticles,
  updateArticle,
  deleteArticle,
  findArticlesByName
};