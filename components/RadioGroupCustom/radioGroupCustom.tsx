import React from "react";
import { Box, RadioButton } from "grommet";
import styled from "styled-components";
import { IPropsRadioGroupCustom } from "@lib/types";

const ButtonGroupCustom = styled(Box)`
  .dRTwkH {
    border-radius: 50%;
    margin-right: 5px;
    width: 18px;
    height: 18px;
    .uKgQD {
      border: 1.5px solid #0070f3;
      width: 18px;
      height: 18px;
      &:hover {
        padding: 0;
        border: 1.5px solid #0070f3;
      }
      .jXqwlN {
        fill: #0070f3;
        width: 24px;
        height: 24px;
      }
    }
    .eWOCnH {
      border: 3px solid #4196f3;
      width: 18px;
      height: 18px;
      &:hover,
      &:focus {
        border: 3px solid #0070f3;
      }
    }
  }
`;

const RadioGroupCustom: React.FC<IPropsRadioGroupCustom> = ({
  checked,
  setChecked,
  items,
  children,
  ...props
}) => {
  return (
    <Box direction="row">
      {items &&
        items.map((item) => (
          <ButtonGroupCustom>
            <RadioButton
              id="radio1"
              name="radio1"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
          </ButtonGroupCustom>
        ))}
    </Box>
  );
};

export default RadioGroupCustom;
