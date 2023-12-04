import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  return (
    <section className="w-full h-full bg-white">
      <div className="px-[45px] mt-[40px]">
        <Bar
          data={{
            labels: [
              "station 1",
              "station 2",
              "station 3",
              "station 4",
              "station 5",
              "station 1",
              "station 2",
              "station 3",
              "station 4",
              "station 5",
            ],
            datasets: [
              {
                label: null,
                data: [250, 160, 200, 230, 140, 160, 200, 230, 140, 260],
                backgroundColor: "#00D1DE",
                barThickness: 8,
              },
            ],
          }}
          height={160}
          width={1080}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 300,
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: true,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </section>
  );
}

export default BarChart;
