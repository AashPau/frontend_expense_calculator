import { useUser } from "../pages/UserContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

export const ExpensesGraph = () => {
  const { transactions } = useUser();
  const expenses = transactions.filter((trans) => {
    return trans.type === "expenses";
  });

  console.log(expenses);
  return (
    <LineChart width={600} height={300} data={expenses}>
      {/* Render lines for expenses */}
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="title" />
      <YAxis />
    </LineChart>
  );
};
