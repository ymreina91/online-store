import { categoryServices } from "@lib/services"
import { ICategory } from "@lib/types";
import { Dispatch } from "redux";
import {
  ActionType
} from "@redux/action-types";

const createCategory = (data: ICategory) => async (dispatch: Dispatch) => {
  try {
    const res = await categoryServices.create(data);
    dispatch({
      type: ActionType.CREATE_CATEGORY,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const retrieveCategories = () => async (dispatch: Dispatch) => {
  try {
    const res = await categoryServices.getAll();
    dispatch({
      type: ActionType.RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateCategory = (id: number, data: ICategory) => async (dispatch: Dispatch) => {
  try {
    const res = await categoryServices.update(id, data);

    dispatch({
      type: ActionType.UPDATE_CATEGORY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const deleteCategory = (id: number) => async (dispatch: Dispatch) => {
  try {
    await categoryServices.remove(id);

    dispatch({
      type: ActionType.DELETE_CATEGORY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

const findCategoriesByName = (name: string) => async (dispatch: Dispatch) => {
  try {
    const res = await categoryServices.findByName(name);

    dispatch({
      type: ActionType.RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export default {
  createCategory,
  retrieveCategories,
  updateCategory,
  deleteCategory,
  findCategoriesByName
};
