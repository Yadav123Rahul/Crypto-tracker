import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid ${
          coin.price_change_percentage_24h < 0 && "grid_container"
        }`}
      >
        <div className="coin_info">
          <img src={coin.image} alt="main-image" className="logo" />
          <div>
            <p className="symbol">{coin.symbol}</p>
            <p className="name">{coin.name}</p>
          </div>
        </div>
        <div>
          {coin.price_change_percentage_24h > 0 ? (
            <div className="data-info">
              <div className="clip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="trending_up">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="data-info">
              <div className="clip clip_red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="trending_up clip_red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
          <p
            className="price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price}
          </p>
          <p className="name">Total Volume : ${coin.total_volume}</p>
          <p className="name">Market Cap : ${coin.market_cap}</p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
