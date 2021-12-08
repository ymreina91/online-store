import axios from "@lib/axios";
import { ICategory } from "@lib/types";

const getAll = () => {
  return axios.get("/categories");
};

const get = (id: number) => {
  return axios.get(`/categories/${id}`);
};

const create = (data: ICategory) => {
  return axios.post("/categories", data);
};

const update = (id: number, data: ICategory) => {
  return axios.put(`/categories/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/categories/${id}`);
};

const removeAll = () => {
  return axios.delete("/categories");
};

const findByName = (name: string) => {
  return axios.get(`/categories?name=${name}`);
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
