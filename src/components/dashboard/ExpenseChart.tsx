import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Food", value: 4000 },
  { name: "Shopping", value: 3000 },
  { name: "Travel", value: 2000 },
  { name: "Bills", value: 5000 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

const ExpenseChart = () => {
  return (
    <PieChart width={500} height={350}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={120}
        label
      >
        {data.map((_, index) => (
          <Cell
            key={index}
            fill={
              COLORS[index % COLORS.length]
            }
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;