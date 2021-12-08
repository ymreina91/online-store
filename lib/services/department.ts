import axios from "@lib/axios";
import { IDepartments } from "@lib/types";

const getAll = () => {
  return axios.get("/departments");
};

const get = (id: number) => {
  return axios.get(`/departments/${id}`);
};

const create = (data: IDepartments) => {
  return axios.post("/departments", data);
};

const update = (id: number, data: IDepartments) => {
  return axios.put(`/departments/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/departments/${id}`);
};

const removeAll = () => {
  return axios.delete("/departments");
};

const findByName = (name: string) => {
  return axios.get(`/departments?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
