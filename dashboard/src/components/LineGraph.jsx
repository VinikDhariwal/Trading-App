import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export function LineGraph({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Zerodha hides legend
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        callbacks: {
          label: (ctx) => `₹ ${ctx.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#888" },
      },
      y: {
        grid: { color: "rgba(200,200,200,0.1)" },
        ticks: {
          color: "#888",
          callback: (value) => `₹ ${value}`,
        },
      },
    },
    elements: {
      point: { radius: 0 }, // no dots (very important)
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}