import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DbController from "@/components/db-controller";

chartjs.register(ArcElement, Tooltip, Legend);

const ChartStats = () => {
  const dbController = new DbController()
  return (
    <div>
      <Doughnut
        data={{
          labels: dbController.getCurrentExistingExpense().map((exp:any) => exp.category),
          datasets: [
            {
              label: "Expenses",
              data: dbController.getCurrentExistingExpense().map((exp:any) => exp.amount),
              backgroundColor: ["lime","red", "yellow","orange"],
              borderColor: "black"
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartStats;
