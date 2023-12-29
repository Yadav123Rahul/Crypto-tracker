import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ConverDataObject } from "../functions/dataOnject";
import List from "../component/dashbord/listview";
import Header from "../component/dashbord/Header/Header";
import Loader from "../component/common/LoadingState";
import Coininfo from "../component/coinCompnent/Coininfo/Coininfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import CoinLineChart from "../component/coinCompnent/CoinLineChart/CoinLineChart";
import { converDate } from "../functions/converDate";
import SelectDays from "../component/coinCompnent/selectDays/SelectDays";
import PriceToggle from "../component/coinCompnent/priceToggle/PriceToggle";
import { settingChartData } from "../functions/settingChartData";

function Coin() {
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(true);
  const [state, setState] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState();
  const [pricesType, setPricesType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      ConverDataObject(setState, data);
      const coinPrices = await getCoinPrices(id, days, pricesType);
      if (coinPrices.length > 0) {
        settingChartData(setChartData, coinPrices);
        setLoadingState(false);
      }
    }
  }

  async function handleChange(event) {
    setDays(event.target.value);
    setLoadingState(true);
    const coinPrices = await getCoinPrices(id, event.target.value, pricesType);
    if (coinPrices.length > 0) {
      settingChartData(setChartData, coinPrices);
      setLoadingState(false);
    }
  }

  const handleChangePriceType = async (event, newPriceType) => {
    setPricesType(newPriceType);
    setLoadingState(true);
    const coinPrices = await getCoinPrices(id, days, newPriceType); // Change this line
    if (coinPrices.length > 0) {
      settingChartData(setChartData, coinPrices);
      setLoadingState(false);
    }
  };
  
  return (
    <div>
      <Header />
      {loadingState ? (
        <Loader />
      ) : (
        <>
          <div className="gray_wrapper">
            <List coin={state} />
          </div>
          <div className="gray_wrapper">
            <div className="price_change">
              Price Change in the last
              <SelectDays handleChange={handleChange} days={days} />
            </div>
            <PriceToggle
              pricesType={pricesType}
              handleChangePriceType={handleChangePriceType}
            />
            <CoinLineChart chartData={chartData} />
          </div>
          <div className="gray_wrapper padding">
            <Coininfo heading={state.name} desc={state.desc} />
          </div>
        </>
      )}
      {/* <List coin={state}/> */}
    </div>
  );
}

export default Coin;
