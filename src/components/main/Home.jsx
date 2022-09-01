import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Line, Bubble, Scatter, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Home = ({ data }) => {
  const [dataset, setDataset] = useState({
    labels: data.map((data) => data.title),
    datasets: [
      {
        label: "my first chart",
        data: data.map((data) => data.price),
      },
    ],
  });

  useEffect(() => {
    return setDataset(chart);
  }, [data]);

  console.log(data);
  console.log(dataset);

  const stats = data.map((e) => {
    return e.price;
  });
  const labels = data.map((e) => {
    return e.rating.count;
  });

  const chart = {
    labels: labels,
    datasets: [
      {
        label: "first dataset",
        backgroundColor: "red",
        borderColor: "red",
        data: stats,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex bg-bgmain">
      <Sidebar />
      <div className="grow flex justify-center items-center">
        <div className="w-full">
          <Line data={dataset} />
        </div>
      </div>
    </div>
  );
};

export default Home;
