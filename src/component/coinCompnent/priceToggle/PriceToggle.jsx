import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceToggle({ pricesType, handleChangePriceType }) {
  return (
    <div className="toggle_prices">
      <ToggleButtonGroup
        value={pricesType}
        exclusive
        onChange={handleChangePriceType}
        sx={{
          "& .Mui-selected": {
            // color:"var(--white)!important",
            color: "var(--blue)!important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset ",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices">PRICE</ToggleButton>
        <ToggleButton value="market_caps">MKT</ToggleButton>
        <ToggleButton value="total_volumes">VOLUME</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
