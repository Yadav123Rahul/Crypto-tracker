import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { get100CoinData } from "../../functions/get100CoinData";

function SelectEachCoin({ cripto1, cripto2, handleCripto }) {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const coins = await get100CoinData();
    // console.log("Fetching coins, ", coins);
    if (coins) {
      setAllCoins(coins);
    }
  };
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)!important",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white) !important",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9 !important",
      },
    },
  };
  return (
    <>
      <div className="currency_select">
        <h5>Cripto 1</h5>
        <Select
          sx={styles}
          value={cripto1}
          label="cripto 1"
          onChange={(event) => handleCripto(event, false)}
        >
          {allCoins
            .filter((item) => item.id != cripto2)
            .map((coin) => (
              <MenuItem key={coin.id} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="currency_select">
        <h5>Cripto 2</h5>
        <Select
          sx={styles}
          value={cripto2}
          label="cripto 2"
          onChange={(event) => handleCripto(event, true)}
        >
          {allCoins
            .filter((item) => item.id != cripto1)
            .map((coin) => (
              <MenuItem key={coin.id} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
    </>
  );
}
// .filter((item) => item.in != cripto1)
// .filter((item) => item.in != cripto2)
export default SelectEachCoin;
