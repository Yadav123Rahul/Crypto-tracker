import { Tooltip } from "@mui/material";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

function List({ coin }) {
  console.log("coin is not present>>>", coin);
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list">
        <td className="coin_info_list">
          <Tooltip title="Logo">
            {" "}
            <img src={coin.image} alt="main-image" className="logo" />
          </Tooltip>

          <div>
            <Tooltip title="Symbol">
              <p className="symbol">{coin.symbol}</p>
            </Tooltip>
            <Tooltip title="Name">
              <p className="name">{coin.name}</p>
            </Tooltip>
          </div>
        </td>
        <td style={{ display: "flex" }}>
          {coin.price_change_percentage_24h > 0 ? (
            <Tooltip title="Price Change">
              <div className="data-info">
                <div className="clip">
                  {(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
                <div className="trending_up">
                  <TrendingUpRoundedIcon />
                </div>
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Price Change">
              <div className="data-info">
                <div className="clip clip_red">
                  {(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
                <div className="trending_up clip_red">
                  <TrendingDownRoundedIcon />
                </div>
              </div>
            </Tooltip>
          )}
        </td>
        <td style={{ display: "flex" }}>
          <Tooltip title="Curent Price">
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
          </Tooltip>
        </td>
        <td>
          <Tooltip title="Total value">
            <p className="name">${coin.total_volume}</p>
          </Tooltip>
        </td>
        <td>
          <Tooltip title="Market Cap">
            <p className="name">${coin.market_cap}</p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List;
