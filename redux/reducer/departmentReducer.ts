import {IDepartments, IGlobalState, initialState} from '@lib/types';
import {ActionType} from "@redux/action-types";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const departmentReducer = (state: IGlobalState = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return Object.assign({}, state, {
        ...state
      });

    case ActionType.CREATE_DEPARTMENT:
      return  Object.assign({}, state, {
        departments: [...state.departments ?? [], payload]
      });

    case ActionType.RETRIEVE_DEPARTMENTS:
      return Object.assign({}, state, {
        ...payload
      });

    case ActionType.UPDATE_DEPARTMENT:
      const data = payload as IDepartments;
      return state.departments?.map((department: IDepartments) => {
        if (department.id === data?.id) {
          return {
            ...state.departments,
            ...data,
          };
        } else {
          return state.departments;
        }
      });

    case ActionType.DELETE_DEPARTMENT:
      return Object.assign({}, state, {
        departments: state.departments?.filter(({ id }) => id !== payload)
      });

    default:
      return state;
  }
};

export default departmentReducer;
