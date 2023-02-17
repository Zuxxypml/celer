import React from "react";
import alameda from "../../Assets/alameda.png";
import coindesk from "../../Assets/coindesk.png";
import techinisia from "../../Assets/techinasia.png";
import yahoo from "../../Assets/yahoo.png";
import { cardData, coinRateData } from "../../constants/data";
import { Button } from "../Button/Button.styled";
import Card from "../Card/Card";
import CoinRateCard from "../CoinRateCard/CoinRateCard";
import CoinSelect from "../CoinSelect/CoinSelect.MUI";
import { FlexBetween } from "../FlexBetween/FlexBetween.styled";
import { Image } from "../Img/Img.styled";
import InputTextField from "../TextField/TextField.MUI";
import {
  SectionContainer,
  SectionFooterLink,
  SectionText,
  SectionTextP,
} from "./Section.styled";
// import iosg from "../../Assets/iosg.jpg";
import divergence from "../../Assets/divergence.png";
import gbv from "../../Assets/gbv.png";
import kr1 from "../../Assets/kr1.png";

const Section = ({ height, sectionNumber }) => {
  if (sectionNumber === "1") {
    return (
      <SectionContainer
        backgroundColor="#000"
        height={height}
        paddingTopSmall="5rem"
        paddingBottomSmall="5rem"
      >
        <SectionText>
          Achieve privacy, high assurance and frictionless computation
        </SectionText>
        <Button
          backgroundColor="#fff"
          color="#000"
          padding="2rem 2.5rem"
          fontSize="1.2rem"
          paddingTop="8rem"
        >
          Explore Solutions
        </Button>
      </SectionContainer>
    );
  } else if (sectionNumber === "2") {
    return (
      <SectionContainer height={height}>
        <FlexBetween>
          <a
            href="https://www.coindesk.com/business/2021/08/17/superrare-drops-rare-token-to-decentralize-nft-marketplace/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Coindesk" src={coindesk} />
          </a>
          <a
            href="https://finance.yahoo.com/news/nft-art-marketplace-superrare-closes-192631056.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Yahoo" src={yahoo} />
          </a>
          <a
            href="https://celertoken.network/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Techinisia" src={techinisia} />
          </a>
        </FlexBetween>
      </SectionContainer>
    );
  } else if (sectionNumber === "3") {
    return (
      <SectionContainer height={height} paddingBottomSmall="4rem">
        <SectionText color="black">
          Building the last piece of the Web 3.0 puzzle
        </SectionText>
        <Button padding="2rem 2.5rem" fontSize="1.2rem" paddingTop="8rem">
          Support Our Project
        </Button>
      </SectionContainer>
    );
  } else if (sectionNumber === "4") {
    return (
      <SectionContainer
        height={height}
        backgroundColor="#000"
        color="#fff"
        paddingBottomSmall="5rem"
        paddingTopSmall="2rem"
      >
        <SectionText color="white">Buy Celer</SectionText>
        <FlexBetween wrap="wrap" textAlign="center">
          {coinRateData.map((rate) => (
            <CoinRateCard key={rate.coin} coin={rate.coin} value={rate.value} />
          ))}
        </FlexBetween>
        <CoinSelect />
        <InputTextField />
      </SectionContainer>
    );
  } else if (sectionNumber === "5") {
    return (
      <SectionContainer
        height={height}
        backgroundColor="#fff"
        color="#000"
        paddingTop="8rem"
        paddingBottom="8rem"
        paddingTopSmall="5rem"
        paddingBottomSmall="5rem"
      >
        <FlexBetween smallWrap="wrap" gap="2rem" smallColumn="column">
          {cardData.map((card) => (
            <Card
              key={card.text}
              iconElement={card.iconElement}
              text={card.text}
              listTexts={card.listTexts}
            />
          ))}
        </FlexBetween>
        <Button marginTop="6rem" padding="2rem 2.5rem" fontSize="1.2rem">
          Discover Our Technology
        </Button>
      </SectionContainer>
    );
  } else if (sectionNumber === "6") {
    return (
      <SectionContainer height={height}>
        <SectionText color="black" marginBottomSmall="0rem">
          Our Investors
        </SectionText>

        <FlexBetween>
          <a
            href="https://www.coindesk.com/business/2021/08/17/superrare-drops-rare-token-to-decentralize-nft-marketplace/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Alameda" filtered="true" src={alameda} />
          </a>
          <a
            href="https://www.coindesk.com/business/2021/08/17/superrare-drops-rare-token-to-decentralize-nft-marketplace/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Divergance" filtered="true" src={divergence} />
          </a>
          <a
            href="https://finance.yahoo.com/news/nft-art-marketplace-superrare-closes-192631056.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="GBV" filtered="true" src={gbv} />
          </a>
          {/* <a
            href="https://celertoken.network/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="Techinisia" src={iosg} />
          </a> */}
          <a
            href="https://celertoken.network/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="kr1" filtered="true" src={kr1} />
          </a>
        </FlexBetween>
      </SectionContainer>
    );
  } else if (sectionNumber === "Footer") {
    return (
      <SectionContainer height={height} backgroundColor="#000">
        <FlexBetween wrap="wrap" textAlign="center">
          <SectionText marginBottomSmall="0rem">CELER</SectionText>
          <SectionTextP marginBottom="3rem" marginBottomSmall="3rem">
            Empowering today's dApps with seamless privacy and high assurance
          </SectionTextP>
        </FlexBetween>
        <FlexBetween
          smallColumn="column"
          justifyContent="flex-end"
          gap="3rem"
          gapSmall="0rem"
          alignItemsSmall="center"
          justifyContentSmall="flex-start"
        >
          <SectionFooterLink target="_blank" href="#" marginBottomSmall="0rem">
            Forum
          </SectionFooterLink>
          <SectionFooterLink
            target="_blank"
            href="#"
            marginBottomSmall="2.5rem"
          >
            Community
          </SectionFooterLink>
        </FlexBetween>
      </SectionContainer>
    );
  }
};

export default Section;
