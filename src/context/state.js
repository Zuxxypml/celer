import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export const StateContext = ({ children }) => {
  const navigate = useNavigate();
  const [coin, setCoin] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const handleCoin = async (coin, amount) => {
    let coinRate, total, buyLink;
    if (coin === "btc") {
      let celrToUsd = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=USD"
      ).then((data) => data.json());
      let celrUsd = await celrToUsd.USD;
      let coinRateInBTC = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=BTC"
      ).then((data) => data.json());
      coinRate = await coinRateInBTC.BTC;
      total = amount / (await celrUsd);
      let finalTotal = total * Number(await coinRate);
      console.log(finalTotal);
      buyLink = `https://link.trustwallet.com/send?coin=0&address=bc1q5je9zry9hkm0fackpva0tqghlnqaxwjvrz8cfl&amount=${finalTotal}`;
    } else if (coin === "bnb") {
      let celrToUsd = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=USD"
      ).then((data) => data.json());
      let celrUsd = await celrToUsd.USD;
      let coinRateInBNB = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=BNB"
      ).then((data) => data.json());
      coinRate = await coinRateInBNB.BNB;
      total = amount / (await celrUsd);
      let finalTotal = total * Number(await coinRate);
      console.log(finalTotal);
      buyLink = `https://link.trustwallet.com/send?coin=0&address=bc1q5je9zry9hkm0fackpva0tqghlnqaxwjvrz8cfl&amount=${finalTotal}`;
    } else if (coin === "busd") {
      let celrToUsd = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=USD"
      ).then((data) => data.json());
      let celrUsd = await celrToUsd.USD;
      let celerInBUSD = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=BUSD"
      ).then((data) => data.json());
      coinRate = await celerInBUSD.BUSD;
      total = amount / (await celrUsd);
      let finalTotal = total * Number(await coinRate);
      console.log(finalTotal);
      buyLink = `https://link.trustwallet.com/send?coin=0&address=bc1q5je9zry9hkm0fackpva0tqghlnqaxwjvrz8cfl&amount=${finalTotal}`;
    } else if (coin === "usdt") {
      let celrToUsd = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=USD"
      ).then((data) => data.json());
      let celrUsd = await celrToUsd.USD;
      let celerInUSDT = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=CELR&tsyms=USDT"
      ).then((data) => data.json());
      coinRate = await celerInUSDT.USDT;
      total = amount / (await celrUsd);
      let finalTotal = total * Number(await coinRate);
      console.log(finalTotal);
      buyLink = `https://link.trustwallet.com/send?coin=0&address=bc1q5je9zry9hkm0fackpva0tqghlnqaxwjvrz8cfl&amount=${finalTotal}`;
    }

    return window.location.replace(`${buyLink}`);
  };

  return (
    <Context.Provider
      value={{
        coin,
        setCoin,
        amount,
        setAmount,
        handleCoin,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
