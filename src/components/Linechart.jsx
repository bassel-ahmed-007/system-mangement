import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Linechart() {
  return (
    <Line
      data={{
        labels: [
          "jun 12",
          "jun 13",
          "jun 14",
          "jun 15",
          "jun 16",
          "jun 17",
          "jun 12",
          "jun 13",
          "jun 14",
          "jun 15",
          "jun 16",
          "jun 12",
          "jun 13",
          "jun 14",
          "jun 15",
          "jun 16",
        ],
        datasets: [
          {
            data: [
              250, 260, 220, 200, 180, 160, 250, 280, 290, 240, 220, 230, 240,
              250, 230, 220,
            ],
            backgroundColor: "#457B9D",
            borderColor: "#457B9D",
            pointBorderColor: "#457B9D",
            hoverBackgroundColor: "#F40009",
            hoverBorderColor: "#F40009",
            pointBorderWidth: 1,
            tension: 0.5,
            borderWidth: 4,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            min: 100,
            max: 300,
            ticks: {
              stepSize: 50,
            },
            grid: {
              borderDash: [10],
            },
          },
        },
      }}
    />
  );
}

export default Linechart;
