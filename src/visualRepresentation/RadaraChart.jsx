import React from "react";
import { useUser } from "../pages/UserContext";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export const RadaraChart = () => {
  const { transactions } = useUser();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transactions}>
        <PolarGrid />
        <PolarAngleAxis dataKey="amount" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="title"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
