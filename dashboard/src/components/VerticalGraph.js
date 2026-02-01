import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, // allow the chart to grow to its container
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const val = context.parsed.y ?? context.parsed;
          return `${context.dataset.label || ''}: ${Number(val).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { maxRotation: 0, minRotation: 0 }
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value) {
          return value >= 1000 ? (value/1000) + 'k' : value;
        }
      }
    }
  },
  // dataset defaults for bar charts for spacing and max thickness
  datasets: {
    bar: {
      maxBarThickness: 56,
      barPercentage: 0.6,
      categoryPercentage: 0.6,
      borderRadius: 6
    }
  }
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}