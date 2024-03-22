import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { expValues } from "@/app/db-controller";

chartjs.register(ArcElement, Tooltip, Legend);

const ChartStats = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: expValues.map((exp:any) => exp.title),
          datasets: [
            {
              label: "Expenses",
              data: expValues.map((exp:any) => exp.amount),
              backgroundColor: "lime",
              borderColor: "black"
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartStats;
