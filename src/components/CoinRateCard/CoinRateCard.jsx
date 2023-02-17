import React from "react";
import {
  CoinCardCointainer,
  CoinCardHeaderText,
  CoinCardText,
} from "./CoinRateCard.styled";

const CoinRateCard = ({ coin, value }) => {
  return (
    <CoinCardCointainer>
      <CoinCardHeaderText>{coin}</CoinCardHeaderText>
      <CoinCardText>{value}</CoinCardText>
    </CoinCardCointainer>
  );
};

export default CoinRateCard;
