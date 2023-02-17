import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useStateContext } from "../../context/state";
import { Button } from "../Button/Button.styled";

export default function InputTextField() {
  const { amount, setAmount, handleCoin, coin } = useStateContext();
  return (
    <Box
      sx={{
        maxWidth: "100%",
        marginTop: "2.5rem",
      }}
    >
      <TextField
        fullWidth
        label="Amount you want to buy"
        type="number"
        id="fullWidth"
        helperText={amount < 1 ? "Minimum Amount is $1" : ""}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        color="primary"
        InputLabelProps={{ style: { color: "#fff" } }}
        inputProps={{ style: { color: "#fff" } }}
        sx={{
          width: "100%",
          border: "1px solid white",
          color: "#fff ",
          ":active": { border: "none", color: "#fff" },
          ":focus-visible": { border: "none", color: "#fff" },
          ":focus-within": { border: "none", color: "#fff" },
          ".MuiFormHelperText-root ": {
            color: "red",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <Button
                padding="1.5rem 2rem"
                fontSize="1rem"
                paddingTop="8rem"
                onClick={() => handleCoin(coin, amount)}
              >
                Submit
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
