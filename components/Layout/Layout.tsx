import React, { useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid,
         Grommet,
         Main,
         Box,
         Button,
         ResponsiveContext,
         Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { NavBar } from '@components/NavBar';
import { SideBar } from "@components/SideBar";

const theme = {
  // Colores del tema claro
  light: {
    background: "#fff",
    color: "#212121"
  },
  // Colores del tema oscuro
  dark: {
    background: "#212121",
    color: "#fff"
  }
};

const Layout: React.FC<{}> = ({ children }) => {
  const size = useContext(ResponsiveContext);
  const [sidebar, setSidebar] = useState(true);
    return (
     <>
       {/*<ThemeProvider theme={theme.light}>*/}
        <Grommet theme={grommet}>
          {/*<NavBar/>
          <Box
             direction='row'
             align='center'
             justify='between'
             pad={{horizontal: '0', vertical: '0'}}
        >
           <SideBar/>
           <Main pad={{horizontal: 'small', vertical: 'small'}}>
             <Text>{size}</Text>
             { children }
           </Main>
        </Box>*/}
          <Grid
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            areas={[
              { name: 'header', start: [0, 0], end: [1, 0] },
              { name: 'sidebar', start: [0, 1], end: [0, 1] },
              { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
          >
            <NavBar sidebar={sidebar} setSidebar={setSidebar}/>
            {sidebar && (
              <SideBar/>
            )}
            <Box gridArea="main" justify="center" align="center">
              <Text>main</Text>
            </Box>
          </Grid>
        </Grommet>
     </>
    );
};

export default Layout;

