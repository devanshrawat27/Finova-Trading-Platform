import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data, options }) {
  const defaultOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  return <div style={{ height: 240 }}>
    <Doughnut data={data} options={{...defaultOptions, ...(options||{})}} />
  </div>;
}
