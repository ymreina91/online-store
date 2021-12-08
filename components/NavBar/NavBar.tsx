import React from "react";
import { Button, Menu, Box, Text } from "grommet";
import { IPropsNavBar } from "@lib/types";

const NavBar: React.FC<IPropsNavBar> = ({
  sidebar = false,
  setSidebar,
  ...props
}) => {
  return (
    <>
      <Box
        gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
        background="dark-2"
        elevation="large"
      >
        <Button onClick={() => setSidebar(!sidebar)}>
          <Text size="xlarge" color="accent-1" style={{ fontFamily: "Impact" }}>
            ONLINE STORE
          </Text>
        </Button>
        <Menu label="account" items={[{ label: "logout" }]} />
      </Box>
    </>
  );
};
export default NavBar;
