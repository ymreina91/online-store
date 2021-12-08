import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box } from 'grommet';
import { articleActions } from "@redux/actions";

const Categories: NextPage = () => {
  /*const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);*/

  return (
    <Box>
      <p>Aqui va el listado de categories</p>
    </Box>
  );
};

export default Categories;
