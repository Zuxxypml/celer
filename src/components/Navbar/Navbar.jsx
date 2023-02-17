import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import { FlexBetween } from "../FlexBetween/FlexBetween.styled";
import { Button } from "../Button/Button.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <FlexBetween>
        <h1>Celer</h1>
        <Button>Buy Celer</Button>
      </FlexBetween>
    </NavbarContainer>
  );
};

export default Navbar;
