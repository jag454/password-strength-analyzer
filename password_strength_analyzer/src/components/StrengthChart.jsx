import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";


function StrengthChart({ score }) {
   ChartJS.register(BarElement, CategoryScale, LinearScale)
  const data = {
    labels: ["Strength"],
    datasets: [
      {
        label: "Score",
        data: [score],
      },
    ],
  };

  return <Bar data={data} />;
 
}

export default StrengthChart;