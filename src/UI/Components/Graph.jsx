import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        axis: "x",
        label: "Attendance Statistics",
        data: [90, 78, 80, 89, 50],
        backgroundColor: "#00aeec",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    title: {
      display: false,
      text: "Attendance Statistics",
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "",
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
        min: 0,
        stepValue: 10,
        steps: 10,
      },
    },
  };
  return (
    <>
      <div className="fw-medium my-2">Attendance Statistics</div>
      <Line data={data} options={options} />
    </>
  );
}

export default Graph;
