import React from "react";
import Image from "next/image";
import { Box } from "grommet";
import { IPropsImageTopButton } from "@lib/types";

const ImageTopButton: React.FC<IPropsImageTopButton> = ({
  imgURL = "/image/baby3.jpg",
  children,
  ...props
}) => {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: 150,
        backgroundColor: "#fff",
      }}
    >
      <Image
        src={imgURL}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
      <Box
        flex
        direction="row"
        justify="end"
        pad="none"
        style={{ position: "absolute", top: 7, right: 7 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ImageTopButton;
