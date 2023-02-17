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
      coinRate = 0.00000076;
      total = amount * coinRate;
      buyLink = `https://link.trustwallet.com/send?coin=0&address=bc1qhzynf74nfrc5gh8lqqlrunrnl03sfjsc8vdy27&amount=${total}`;
    } else if (coin === "bnb") {
      coinRate = 0.00005917;
      total = amount * coinRate;
      buyLink = `https://link.trustwallet.com/send?coin=714&address=bnb14cug0qxfe86hu7ykuhc0dnpzza9mel8wrte62v&amount=${total}`;
    } else if (coin === "busd") {
      coinRate = 0.01818112;
      buyLink = `https://link.trustwallet.com/send?coin=20000714&address=0x9931F46838E022951E04eF1cCe5280D9f5615175&amount=${total}&token_id=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56`;
      total = amount * coinRate;
    } else if (coin === "usdt") {
      coinRate = 0.01817264;
      total = amount * coinRate;
      buyLink = `https://link.trustwallet.com/send?coin=20000714&address=0x5a799B0537Ca6dd3b3FE92B03D608b6cde71783A&amount=${total}&token_id=0x55d398326f99059fF775485246999027B3197955`;
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
