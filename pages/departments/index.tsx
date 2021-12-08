import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box } from "grommet";
import { articleActions } from "@redux/actions";

const Departments: NextPage = () => {
  /*const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);*/

  return (
    <Box>
      <p>Aqui va el listado de departments</p>
    </Box>
  );
};

export default Departments;
