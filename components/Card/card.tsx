import React from "react";
import Image from "next/image";
import { Box, Card, CardBody, CardFooter, Button, Text } from "grommet";
import styled from "styled-components";
import { Edit, Trash } from "grommet-icons";
import { HeaderContent } from "../HeaderContent";
import { RadioGroupCustom } from "../RadioGroupCustom";
import { ImageTopButton } from "../ImageTopButton";
import index from "@lib/axios";
import { IPropsCardCustom } from "@lib/types";

const TextSize = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 5px;
  ...props
`;

const CardCustom: React.FC<IPropsCardCustom> = ({
  imgURL,
  title,
  items,
  subtitle,
  data,
  itemsMore,
  textDescription,
  children,
  ...props
}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Card
        height="auto"
        width="auto"
        background="light-1"
        margin="small"
        style={{ maxWidth: "200px" }}
      >
        <CardBody>
          <ImageTopButton imgURL={imgURL}>
            <Button
              plain={true}
              margin={{ right: "5px" }}
              icon={<Edit color="#0070f3" size="small" />}
            />
            <Button
              plain={true}
              icon={<Trash color="status-critical" size="small" />}
            />
          </ImageTopButton>
          <Box pad="small">
            <HeaderContent
              title={title}
              weight={600}
              textTransform="uppercase"
            />
            <HeaderContent title={subtitle} textTransform="uppercase" />
            <HeaderContent title={textDescription} />
            <HeaderContent title="Size" weight={600} textTransform="uppercase">
              {items && items.map((s) => <TextSize>{s}</TextSize>)}
            </HeaderContent>
            <HeaderContent
              title="Colors"
              textTransform="uppercase"
              weight={600}
            >
              <RadioGroupCustom
                checked={checked}
                setChecked={setChecked}
                items={itemsMore}
              />
            </HeaderContent>
          </Box>
        </CardBody>
        <CardFooter
          pad="small"
          background="light-2"
          direction="row"
          justify="center"
        >
          <Button label={data} primary color="#0070f3" />
        </CardFooter>
      </Card>
    </>
  );
};
export default CardCustom;
