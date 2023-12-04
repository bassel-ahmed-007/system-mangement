import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CountUp from "react-countup";
ChartJS.register(ArcElement, Tooltip, Legend);

function Donut() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "shop 1",
        data: [18, 6],
        backgroundColor: ["#F40009", "#8D9192"],
        borderColor: ["#F40009", "#8D9192"],
        cutout: "85%",
      },
    ],
  };

  const options = {
    aspectRatio: 1,
  };

  return (
    <div className="w-[58px] h-[58px] relative">
      <Doughnut data={data} options={options} />
      <div className="absolute top-[25px] left-[16px] font-bold text-[13px]">
        <CountUp start={0} end={75} duration={3} />%
      </div>
    </div>
  );
}

export default Donut;
