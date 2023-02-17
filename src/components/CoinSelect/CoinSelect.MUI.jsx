import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useStateContext } from "../../context/state";

export default function CoinSelect() {
  const { coin, setCoin } = useStateContext();
  const handleChange = (event) => {
    setCoin(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        marginTop: "4rem",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
          Select Coin To Pay With
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coin}
          label="Coin"
          onChange={handleChange}
          sx={{
            border: "1px solid white",
            color: "#fff",
            ":active": { border: "none" },
            ":focus-visible": { border: "none" },
            ":focus-within": { border: "none" },
          }}
        >
          <MenuItem value="bnb">BNB</MenuItem>
          <MenuItem value="btc">BTC</MenuItem>
          <MenuItem value="busd">BUSD</MenuItem>
          <MenuItem value="usdt">USDT</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
