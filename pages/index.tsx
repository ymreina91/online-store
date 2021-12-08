import type { NextPage } from "next";
import { IGlobalState } from "@lib/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { articleActions, categoryActions, departmentActions } from "@redux/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { articles, categories, departments } = useSelector((state: IGlobalState ) => state);
  console.log("state->articles: ", articles)
  console.log("state->categories: ", categories)
  console.log("state->departments: ", departments)

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
    dispatch(categoryActions.retrieveCategories());
    dispatch(departmentActions.retrieveDepartments());
  }, []);

  return <>Home</>;
};

export default Home;
