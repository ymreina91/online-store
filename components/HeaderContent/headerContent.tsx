import React from "react";
import { Box, Text } from "grommet";
import styled from "styled-components";
import { IPropsHeaderContent } from "@lib/types";

const ItemContent = styled(Box)`
  padding: 0 0 5px 0;
  ...props
`;

const HeaderContent: React.FC<IPropsHeaderContent> = ({
  title = "Ropa de bebe",
  weight = 400,
  size = "xsmall",
  textTransform = "none",
  children,
  ...props
}) => {
  return (
    <ItemContent>
      {title && (
        <Text
          size={size}
          weight={weight}
          style={{ textTransform: textTransform.toString() }}
        >
          {title}
        </Text>
      )}
      <Box direction="row">{children}</Box>
    </ItemContent>
  );
};

export default HeaderContent;
