import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box } from "grommet";

const Dashboard: NextPage = () => {
  /*const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);*/

  return (
    <Box>
      <p>Aqui van los listados</p>
    </Box>
  );
};

export default Dashboard;
