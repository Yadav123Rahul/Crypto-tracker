import { converDate } from "./converDate";

export const settingChartData = (setChartData,coinPrices1, coinPrices2)=>{
  if(coinPrices2){
    setChartData({
      labels: coinPrices1.map((price) => converDate(price[0])),
      datasets: [
        {
          label:"Cripto 1",
          data: coinPrices1.map((price) => price[1]),
          borderColor: "#3a88e9",
          borderWith:2,
          // fill:true,
          tension:0.25,
          pointRadius:0,
          // backgroundColor: !coinPrices1?"transparent":"#1B2229",
          yAxisID:"cripto1",
        },
        {
          label:"Cripto 2",
          data: coinPrices2.map((price) => price[1]),
          borderColor: "#61e96f",
          borderWith:2,
          // fill:true,
          tension:0.25,
          pointRadius:0,
          // backgroundColor: !coinPrices2?"transparent":"#1B2229",
          yAxisID:"cripto2",
        },
      ],
    });
  }
  else{
    setChartData({
      labels: coinPrices1.map((price) => converDate(price[0])),
      datasets: [
        {
          data: coinPrices1.map((price) => price[1]),
          borderColor: "#3a88e9",
          borderWith:2,
          fill:true,
          tension:0.25,
          pointRadius:0,
          backgroundColor: !coinPrices1?"transparent":"#1B2229",
          yAxisid:"cripto1",
        },
      ],
    });
  }
    
}