"use client";
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
export default function AnimatedChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="amount"
          stroke="currentColor"
          className="text-purple"
          strokeWidth={3}
          isAnimationActive
        />
        <XAxis dataKey="date" /><YAxis /><Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
