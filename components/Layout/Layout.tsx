import React, { useContext, useState } from "react";
import { Grid, Grommet, Box, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";
import { NavBar } from "@components/NavBar";
import { SideBar } from "@components/SideBar";

const Layout: React.FC<{}> = ({ children }) => {
  const size = useContext(ResponsiveContext);
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Grommet theme={grommet}>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] },
          ]}
        >
          <NavBar sidebar={sidebar} setSidebar={setSidebar} />
          {sidebar && <SideBar />}
          <Box gridArea="main" justify="start" align="center" pad="small">
            {children}
          </Box>
        </Grid>
      </Grommet>
    </>
  );
};

export default Layout;
