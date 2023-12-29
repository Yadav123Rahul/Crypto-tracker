import React, { useEffect, useState } from "react";
import Header from "../component/dashbord/Header/Header";
import SelectEachCoin from "../component/selectCoins/SelectCoins";
import SelectDays from "../component/coinCompnent/selectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { ConverDataObject } from "../functions/dataOnject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
import List from "../component/dashbord/listview";
import Coininfo from "../component/coinCompnent/Coininfo/Coininfo";
import CoinLineChart from "../component/coinCompnent/CoinLineChart/CoinLineChart";
import Loader from "../component/common/LoadingState";
import PriceToggle from "../component/coinCompnent/priceToggle/PriceToggle";

function Compare() {
  const [days, setDays] = useState(30);
  const [cripto1, setCripto1] = useState("bitcoin");
  const [cripto2, setCripto2] = useState("ethereum");
  const [cripto1Data, setCripto1Data] = useState({});
  const [cripto2Data, setCripto2Data] = useState({});
  const [priceType, setPricesType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [lodingState, setLoadingState] = useState(true);

  async function handleChangeDays(event) {
    setLoadingState(true);
    setDays(event.target.value);
    console.log(event.target.value);
    const coinPrices1 = await getCoinPrices(cripto1, event.target.value, priceType);
    const coinPrices2 = await getCoinPrices(cripto2, event.target.value, priceType);
    if (coinPrices1.length > 0 && coinPrices2.length > 0) {
      // console.log("CoinPrices>>>>>", coinPrices1, coinPrices2);
      settingChartData(setChartData, coinPrices1, coinPrices2);
      setLoadingState(false);
    }
  }

  const handleChangePriceType = async (event, newPriceType) => {
    setLoadingState(true);
    setPricesType(newPriceType);
    const coinPrices1 = await getCoinPrices(cripto1, days, newPriceType);
    const coinPrices2 = await getCoinPrices(cripto2, days, newPriceType);
    if (coinPrices1.length > 0 && coinPrices2.length > 0) {
      settingChartData(setChartData, coinPrices1, coinPrices2);
      setLoadingState(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // console.log("getData()>>>>>>>>,");
    const data1 = await getCoinData(cripto1);
    const data2 = await getCoinData(cripto2);
    if (data1) {
      ConverDataObject(setCripto1Data, data1);
    }
    if (data2) {
      ConverDataObject(setCripto2Data, data2);
    }
    if (data1 && data2) {
      const coinPrices1 = await getCoinPrices(cripto1, days, priceType);
      const coinPrices2 = await getCoinPrices(cripto2, days, priceType);
      if (coinPrices1.length > 0 && coinPrices2.length > 0) {
        // console.log("CoinPrices>>>>>", coinPrices1, coinPrices2);
        settingChartData(setChartData, coinPrices1, coinPrices2);
        setLoadingState(false);
      }
    }
  }

  async function handleEachCripto(event, isCoin2) {
    setLoadingState(true);
    if (isCoin2) {
      setCripto2(event.target.value);
      console.log(event.target.value);
      const data = await getCoinData(event.target.value);
      ConverDataObject(setCripto2Data, data);
      const coinPrices1 = await getCoinPrices(cripto1, days, priceType);
      const coinPrices2 = await getCoinPrices(
        event.target.value,
        days,
        priceType
      );
      if (coinPrices1.length > 0 && coinPrices2.length > 0) {
        // console.log("CoinPrices>>>>>", coinPrices1, coinPrices2);
        settingChartData(setChartData, coinPrices1, coinPrices2);
        setLoadingState(false);
      }
    } else {
      setCripto1(event.target.value);
      console.log(event.target.value);
      const data = await getCoinData(event.target.value);
      ConverDataObject(setCripto1Data, data);
      const coinPrices1 = await getCoinPrices(
        event.target.value,
        days,
        priceType
      );
      const coinPrices2 = await getCoinPrices(cripto2, days, priceType);
      if (coinPrices1.length > 0 && coinPrices2.length > 0) {
        // console.log("CoinPrices>>>>>", coinPrices1, coinPrices2);
        settingChartData(setChartData, coinPrices1, coinPrices2);
        setLoadingState(false);
      }
    }
  }

  return (
    <div>
      <Header />
      {lodingState ? (
        <Loader />
      ) : (
        <>
          <div style={{ display: "flex", gap: "3.5rem", margin: "30px 0" }}>
            <SelectEachCoin
              cripto1={cripto1}
              cripto2={cripto2}
              handleCripto={handleEachCripto}
            />
            <SelectDays days={days} handleChange={handleChangeDays} />
          </div>

          <div className="gray_wrapper">
            <List coin={cripto1Data} />
          </div>
          <div className="gray_wrapper">
            <List coin={cripto2Data} />
          </div>

          <PriceToggle
            pricesType={priceType}
            handleChangePriceType={handleChangePriceType}
          />

          <CoinLineChart
            chartData={chartData}
            multiAxis={true}
            priceType={priceType}
          />

          <div className="gray_wrapper padding">
            <Coininfo heading={cripto1Data.name} desc={cripto1Data.desc} />
          </div>
          <div className="gray_wrapper padding">
            <Coininfo heading={cripto2Data.name} desc={cripto2Data.desc} />
          </div>
        </>
      )}
    </div>
  );
}

export default Compare;
