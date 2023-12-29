import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto"; //Dont get rid of this

function CoinLineChart({ chartData, multiAxis, priceType }) {
  console.log(priceType,">>>>>>>>>>>>>>>currency")
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales:{
      cripto1:{
        type:"linear",
        display:true,
        position:"left",
        ticks:{
          callback:function(value, index,ticks){
            if(priceType=="prices") return "$"+value.toLocaleString();
            else{
             return "$"+value.toLocaleString();
            }
          }
        }
      },
      // "$"+convertNumber(value);
      cripto2:{
        type:"linear",
        display:true,
        position:"right",
        ticks:{
          callback:function(value, index,ticks){
            if(priceType=="prices") return "$"+value.toLocaleString();
            else{
             return "$"+value.toLocaleString();
            }
          }
        }
      }
    }
  };
  return <Line data={chartData} options={options} />;
}

export default CoinLineChart;
