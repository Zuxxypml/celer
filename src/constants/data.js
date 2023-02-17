import CheckIcon from "@mui/icons-material/Check";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

export const cardData = [
  {
    iconElement: <CheckIcon sx={{ mt: "2rem", fontSize: "8rem" }} />,
    text: "Traceless Privacy",
    listTexts: [
      "Anonymous voting for DAOs",
      "Secret messaging between networks",
      "Do-not-track querying for indexers",
    ],
  },
  {
    iconElement: <SpeedIcon sx={{ mt: "2rem", fontSize: "8rem" }} />,
    text: "High Assurance",
    listTexts: [
      "Front-running prevention for DEXs",
      "Tamper-proof data sourcing for oracles",
      "Robust randomness for apps",
    ],
  },
  {
    iconElement: <SecurityIcon sx={{ mt: "2rem", fontSize: "8rem" }} />,
    text: "Frictionless Computation",
    listTexts: [
      "Speedy cross-chain transactions",
      "Sub-second layer 2 for chains",
      "Non-intrusive protection for DeFis",
    ],
  },
];
