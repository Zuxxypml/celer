import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import { FlexBetween } from "../FlexBetween/FlexBetween.styled";
import { ButtonA } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <FlexBetween>
        <h1>Celer</h1>
        <ButtonA onClick={() => navigate("/#buytoken")}>Buy Celer</ButtonA>
      </FlexBetween>
    </NavbarContainer>
  );
};

export default Navbar;
