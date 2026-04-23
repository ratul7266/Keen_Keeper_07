import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Stats = () => {
  const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

  const COLORS = ["#7c3aed", "#16a34a", "#14532d"];

  const stats = [
    { name: "Text", value: timeline.filter((t) => t.action === "Text").length },
    { name: "Call", value: timeline.filter((t) => t.action === "Call").length },
    {
      name: "Video",
      value: timeline.filter((t) => t.action === "Video").length,
    },
  ];

  return (
    <div className="bg-base-200">
      <div className="mx-auto container pt-16 pb-24">
        <div>
          <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>
        </div>
        <div className="w-full h-80 flex flex-col items-center justify-center p-6 bg-white rounded-2xl">
            <p className="text-green-900 font-semibold ">By Interaction Type</p>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
              >
                {stats.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
