import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData"; // mock data
import useAcademystats from "../../hooks/dashboard/useAcademystats"; // API

function Academy() {
  const { labels, values } = useAcademystats(); // API
  // const { labels, values } = academyStats; // mock data
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const newLabels = ["理學院", "創新設計學院", "電機資訊學院", "生物資源暨農學院", "社會科學院", "法律學院", "工學院", "管理學院", "醫學院", "文學院"];
  const newValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  
    for (let i = 0; i < labels?.length; i++) {
      if (["心理所一般組", "數學系", "物理學系", "心理學系"].includes(labels[i])) {
        newValues[0] += values[i] ; 
      } else if (["創新領域學士學位學程"].includes(labels[i])) {
        newValues[1] += values[i] ;
      } else if (["電機工程學系", "資訊工程學系", "生醫電資所", "資訊工程研究所"].includes(labels[i])) {
        newValues[2] += values[i];
      } else if (["生物機電工程學系"].includes(labels[i])) {
        newValues[3] += values[i];
      } else if (["經濟學系", "經濟系"].includes(labels[i])) {
        newValues[4] += values[i];
      } else if (["科際整合法律學研究所"].includes(labels[i])) {
        newValues[5] += values[i];
      } else if (["材料科學與工程學系", "工程科學及海洋工程學系", "醫學工程學系"].includes(labels[i])) {
        newValues[6] += values[i];
      } else if (["工商管理學系 科技管理組", "工商管理學系", "會計學系", "國際企業學系", "資訊管理學系"].includes(labels[i])) {
        newValues[7] += values[i];
      } else if (["物理治療學系"].includes(labels[i])) {
        newValues[8] += values[i];
      } else if(["戲劇學系", "外國語文學系 / 圖書資訊學系", "歷史學系", "外國語文學系/社會學系"].includes(labels[i])) {
        newValues[9] += values[i];
      }
    } 

  console.log(newValues);
  console.log(newLabels);

  const chartData = {
    labels: newLabels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: newValues,
        backgroundColor: newValues?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
