import React from "react";
import { CardCustom } from "@components/Card";
import { Box, Heading, Button } from 'grommet';
import { AddCircle } from 'grommet-icons';
import styled from "styled-components";

const articles = {
  item: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
  item1: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
  item2: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
  item3: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
  item4: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
  item5: {
    imgURL: "/image/baby3.jpg",
    title: "Conjunto de bebe",
    subtitle: "Ropa de bebe",
    textDescription: "Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión.",
    items: ['XS', 'S', 'M', 'L', 'XL'],
    itemsMore: ['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED'],
    data: "50.95 USD"
  },
};

const Articles: React.FC<{}> = ({ ...props }) =>  {
  /*const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);*/

  return (
    <Box>
      <Box flex direction="row" justify="between" pad={{ horizontal: "small" }}>
        <Heading title="Articles" level={3}>Articles</Heading>
        <Button icon={<AddCircle size="medium" color="#0070f3"/>}
                onClick={() => {}}
                size="medium"
                plain={true}
                style={{height: 25,
                  borderRadius: '50%',
                  textAlign: "center"}}
                margin={{vertical: "auto"}}
                tip="Add articles"/>
      </Box>
      <Box direction="row" justify="around" wrap>
        <CardCustom imgURL="/image/baby3.jpg"
                    title="Conjunto de bebe"
                    subtitle="Ropa de bebe"
                    textDescription="Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión."
                    items={['XS', 'S', 'M', 'L', 'XL']}
                    itemsMore={['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED']}
                    data="50.95 USD"
        />
        <CardCustom imgURL="/image/baby3.jpg"
                    title="Conjunto de bebe"
                    subtitle="Ropa de bebe"
                    textDescription="Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión."
                    items={['XS', 'S', 'M', 'L', 'XL']}
                    itemsMore={['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED']}
                    data="50.95 USD"
        />
        <CardCustom imgURL="/image/baby3.jpg"
                    title="Conjunto de bebe"
                    subtitle="Ropa de bebe"
                    textDescription="Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión."
                    items={['XS', 'S', 'M', 'L', 'XL']}
                    itemsMore={['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED']}
                    data="50.95 USD"
        />
        <CardCustom imgURL="/image/baby3.jpg"
                    title="Conjunto de bebe"
                    subtitle="Ropa de bebe"
                    textDescription="Conjunto para bebe de 6 piezas, perfecto para cualquier ocasión."
                    items={['XS', 'S', 'M', 'L', 'XL']}
                    itemsMore={['#7D4CDB', '#6FFFB0', '#FD6FFF', '#FFCA58', '#81FCED']}
                    data="50.95 USD"
        />

      </Box>
    </Box>
  );
};

export default Articles;
