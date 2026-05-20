import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <div className="w-full h-[380px] bg-white rounded-2xl shadow-sm p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            labelLine={false}
            label
          >
            {data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
        </Pie>
          <Tooltip content={CustomTooltip} />

          <Legend content={CustomLegend}
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{
              fontSize: "14px",
              paddingTop: "10px",
            }}
          />

          {showTextAnchor && (
            <>
              <text
                x="50%"
                y="50%"
                dy={-10}
                textAnchor="middle"
                fill="#6B7280"
                fontSize="14"
                fontWeight="500"
              >
                {label}
              </text>

              <text
                x="50%"
                y="50%"
                dy={18}
                textAnchor="middle"
                fill="#111827"
                fontSize="24"
                fontWeight="700"
              >
                {totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;