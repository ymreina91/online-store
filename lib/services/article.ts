import axios from "@lib/axios";
import { IArticle } from "@lib/types";

const getAll = () => {
  return axios.get("/articles");
};

const get = (id: number) => {
  return axios.get(`/articles/${id}`);
};

const create = (data: IArticle) => {
  return axios.post("/articles", data);
};

const update = (id: number, data: IArticle) => {
  return axios.put(`/articles/${id}`, data);
};

const remove = (id: number) => {
  return axios.delete(`/articles/${id}`);
};

const removeAll = () => {
  return axios.delete("/articles");
};

const findByName = (name: string) => {
  return axios.get(`/articles?name=${name}`);
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
