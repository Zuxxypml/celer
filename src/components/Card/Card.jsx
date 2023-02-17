import React from "react";
import { FlexBetween } from "../FlexBetween/FlexBetween.styled";
import { SectionTextP } from "../Section/Section.styled";
import { CardContainer, CardLi } from "./Card.styled";
const Card = ({ iconElement, text, listTexts }) => {
  return (
    <CardContainer>
      <FlexBetween column="column" smallColumn="column" gap="3rem">
        {iconElement}
        <FlexBetween column="column" smallColumn="column">
          <SectionTextP
            marginBottom="0rem"
            marginBottomSmall="0rem"
            color="black"
          >
            {text}
          </SectionTextP>
          <ul>
            {listTexts.map((lText) => (
              <CardLi>{lText}</CardLi>
            ))}
          </ul>
        </FlexBetween>
      </FlexBetween>
    </CardContainer>
  );
};

export default Card;
