import { useUser } from "../pages/UserContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineGraph = () => {
  const { transactions } = useUser();
  const expenses = transactions.filter((trans) => {
    return trans.type === "expenses";
  });
  const income = transactions.filter((inco) => {
    return inco.type === "income";
  });
  console.log(income);
  console.log(expenses);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={300}
        data={transactions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Render lines for expenses */}
        <Line
          type="monotone"
          dataKey="amount"
          // data={expenses}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        {/* Render lines for income */}
        {/* <Line type="monotone" dataKey="amount" data={income} stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};
