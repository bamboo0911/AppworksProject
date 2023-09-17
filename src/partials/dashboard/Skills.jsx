
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Import utilitiesr
import { useCookies } from "react-cookie";
import { tailwindConfig } from "../../utils/Utils";
// import { skills } from "../../data/mockData";  // mock data

import useSkills from "../../hooks/dashboard/useSkills"; // API

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Skills() {
   const [cookies] = useCookies(["studentId"]);
   const { studentId } = cookies;
  // const studentId = "B11000000"; //mock data
  const { labels, values } = useSkills(studentId); // 使用 useSkills 钩子获取数据 By chatGPT
  const chartData = {
    labels,
    datasets: [
      {
        label: "能力值",
        data: values,
        backgroundColor: tailwindConfig().theme.colors.orange[200],
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="">
        <h2 className="px-5 py-4 font-semibold text-slate-800 dark:text-slate-100">
          Skills
        </h2>
      </header>
      {studentId ? (
        <div className="flex align-center flex-col px-28">
          <div className="text-center my-4">學號：{studentId}</div>
          <Radar data={chartData} />
        </div>
      ) : (
        <div className="pt-20 text-center">尚未輸入數值，請先送出右方表單</div>
      )}
    </div>
  );
}

export default Skills;
