import { departmentServices } from "@lib/services";
import { ICategory, IDepartments } from "@lib/types";
import { Dispatch } from "redux";
import {
  ActionType
} from "@redux/action-types";

const createDepartment = (data: ICategory) => async (dispatch: Dispatch) => {
  try {
    const res = await departmentServices.create(data);
    dispatch({
      type: ActionType.CREATE_DEPARTMENT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const retrieveDepartments = () => async (dispatch: Dispatch) => {
  try {
    const res = await departmentServices.getAll();
    dispatch({
      type: ActionType.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateDepartment = (id: number, data: IDepartments) => async (dispatch: Dispatch) => {
  try {
    const res = await departmentServices.update(id, data);

    dispatch({
      type: ActionType.UPDATE_DEPARTMENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const deleteDepartment = (id: number) => async (dispatch: Dispatch) => {
  try {
    await departmentServices.remove(id);

    dispatch({
      type: ActionType.DELETE_DEPARTMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

const findDepartmentsByName = (name: string) => async (dispatch: Dispatch) => {
  try {
    const res = await departmentServices.findByName(name);

    dispatch({
      type: ActionType.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export default {
  createDepartment,
  retrieveDepartments,
  updateDepartment,
  deleteDepartment,
  findDepartmentsByName
};
