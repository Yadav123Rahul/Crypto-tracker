import React, { useEffect, useState } from "react";
import Header from "../component/dashbord/Header/Header";
import SelectEachCoin from "../component/selectCoins/SelectCoins";
import SelectDays from "../component/coinCompnent/selectDays/SelectDays";
import { getCoinPrices } from "../functions/getCoinPrices";
import { ConverDataObject } from "../functions/dataOnject";
import { getCoinData } from "../functions/getCoinData";
import List from "../component/dashbord/listview";
import Coininfo from "../component/coinCompnent/Coininfo/Coininfo";
import CoinLineChart from "../component/coinCompnent/CoinLineChart/CoinLineChart";
import { converDate } from "../functions/converDate";

function Compare() {
  const [cripto1, setCripto1] = useState("bitcoin");
  const [cripto2, setCripto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [cripto1Data, setCripto1Data] = useState({});
  const [cripto2Data, setCripto2Data] = useState({});
  const [chartData, setChartData] = useState({});

  function handleChangeDays(event){
    setDays(event.target.value)
  }

  function handleChange(event) {
    setDays(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      await getData();
      console.log("useEffect is working");
    };

    fetchData();
  }, [cripto1, cripto2, days]);

  console.log("compare is working");

  async function getData() {
    console.log("getData is working");
    const data1 = await getCoinData(cripto1);
    const data2 = await getCoinData(cripto2);
    console.log("Data1: ", data1);

    if (data1) {
      ConverDataObject(setCripto1Data, data1);
    }

    if (data2) {
      ConverDataObject(setCripto2Data, data2);
    }

    console.log("cripto1Data: ", cripto1Data);
    console.log("cripto2Data: ", cripto2Data);

    if (data1 && data2) {
      const coinPrices1 = await getCoinPrices(cripto1, days, "prices");
      const coinPrices2 = await getCoinPrices(cripto2, days, "prices");

      if (coinPrices1 && coinPrices2) {
        console.log("commmint both data", coinPrices1, coinPrices2);
        setChartData({
          labels: coinPrices1.map((price) => converDate(price[0])),
          datasets: [
            {
              data: coinPrices1.map((price) => price[1]),
              borderColor: "#3a88e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              pointRadius: 0,
              backgroundColor: !coinPrices1 ? "transparent" : "#1B2229",
            },
          ],
        });
      }
    }
  }

  async function handleCripto(event, isTrue) {
    if (isTrue) {
      setCripto2(event.target.value);
      console.log("coming2: ", event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        ConverDataObject(setCripto1Data, data);
        const coinPrices = await getCoinPrices(
          event.target.value,
          days,
          "prices"
        );
        if (coinPrices.length > 0) {
          setChartData({
            labels: coinPrices.map((price) => converDate(price[0])),
            datasets: [
              {
                data: coinPrices.map((price) => price[1]),
                borderColor: "#3a88e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                pointRadius: 0,
                backgroundColor: !coinPrices ? "transparent" : "#1B2229",
              },
            ],
          });
        }
      }
    } else {
      setCripto1(event.target.value);
      console.log("coming1: ", event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        ConverDataObject(setCripto2Data, data);
        const coinPrices = await getCoinPrices(
          event.target.value,
          days,
          "prices"
        );
        if (coinPrices.length > 0) {
          setChartData({
            labels: coinPrices.map((price) => converDate(price[0])),
            datasets: [
              {
                data: coinPrices.map((price) => price[1]),
                borderColor: "#3a88e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                pointRadius: 0,
                backgroundColor: !coinPrices ? "transparent" : "#1B2229",
              },
            ],
          });
        }
      }
    }
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: "3.5rem", margin: "30px 0" }}>
        <SelectEachCoin
          cripto1={cripto1}
          cripto2={cripto2}
          handleCripto={handleCripto}
        />
        <SelectDays days={days} handleChange={handleChange} />
      </div>
      <CoinLineChart chartData={chartData} />
      <div className="gray_wrapper">
        <List coin={cripto1Data} />
      </div>
      <div className="gray_wrapper">
        <List coin={cripto2Data} />
      </div>
      <div className="gray_wrapper padding">
        <Coininfo heading={cripto1Data.name} desc={cripto1Data.desc} />
      </div>
      <div className="gray_wrapper padding">
        <Coininfo heading={cripto2Data.name} desc={cripto2Data.desc} />
      </div>
    </div>
  );
}

export default Compare;
