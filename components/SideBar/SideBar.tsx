import React from "react";
import styled from "styled-components";
import { colors } from "@lib/constants";
import Link from "next/link";
import { Sidebar, Nav, Avatar, Button, Text, Box } from "grommet";
import { Dashboard, Package, Organization, Catalog } from "grommet-icons";

const Label = styled(Text)`
  font-weight: 400;
  @media only screen and (max-width: 575px){
    display: none;
  },
  @media (min-width: 576px){
    display: contents;
  },
  ...props
`;

const TabBar = styled(Button)`
  border-width: 0;
  justify-content: center;
  &:hover, &:focus {
    color: ${colors.lightGreen};
    font-weight: 600;
    background: ${colors.rgbaWhite01};
    .gPdjsX{
      fill: ${colors.lightGreen};
    }
  }
  @media (max-width: 575px){
    .iUEnJr{
      display: none;
    }
  }
  @media (min-width: 576px){
    display: flex;
    justify-content: flex-start;
    padding-left: 15px;
    padding-right: 15px;
  }
  ...props
`;

const SideBar: React.FC<{}> = ({ ...props }) => {
  return (
    <>
      <Sidebar
        gridArea="sidebar"
        background={colors.dark}
        round="small"
        animation={[
          { type: "fadeIn", duration: 300 },
          { type: "slideRight", size: "xlarge", duration: 150 },
        ]}
        header={
          <Box
            direction="row"
            align="center"
            justify="center"
            pad={{ bottom: "small" }}
            style={{ borderBottom: "1px solid #c3c3c3" }}
          >
            <Avatar src="/image/avatar.png" />
            <Label style={{ marginLeft: 5 }}>Name</Label>
          </Box>
        }
        footer={<Text>Footer</Text>}
        style={{ borderRadius: "0", minHeight: "100vh" }}
      >
        <Nav gap="small">
          <Link href="/dashboard">
            <TabBar
              icon={<Dashboard />}
              label={<Label>Dashboard</Label>}
              href="#"
              hoverIndicator
            />
          </Link>
          <Link href="/articles">
            <TabBar
              icon={<Package />}
              label={<Label>Articles</Label>}
              hoverIndicator
            />
          </Link>
          <Link href="/categories">
            <TabBar
              icon={<Catalog />}
              label={<Label>Categories</Label>}
              hoverIndicator
            />
          </Link>
          <Link href="/departments">
            <TabBar
              icon={<Organization />}
              label={<Label>Departments</Label>}
              hoverIndicator
            />
          </Link>
        </Nav>
      </Sidebar>
    </>
  );
};
export default SideBar;
