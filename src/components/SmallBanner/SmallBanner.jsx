import React from "react";
import { Button } from "../Button/Button.styled";
import { FlexBetween } from "../FlexBetween/FlexBetween.styled";
import { BannerContainer } from "./SmallBanner.styled";

const SmallBanner = () => {
  return (
    <BannerContainer>
      <FlexBetween>
        <span>Celer is now Listed on Binance 🔥</span>
        <Button>News</Button>
      </FlexBetween>
    </BannerContainer>
  );
};

export default SmallBanner;
