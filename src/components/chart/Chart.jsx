import "./chart.scss";
import {
  CartesianGrid,
  Area,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  LineChart,
  Line
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({ aspect, title, data }) => {
  console.log(data,"DAtA")
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip formatter={(value, name) => [value, `${name}`]} />
      <Legend />
      <Line type="monotone" dataKey="seats_occupied" stroke="#8884d8" fill="#8884d8" name="Seats Occupied"  />
      <Area type="monotone" dataKey="seats_occupied" stroke="#8884d8" fill="#8884d8" />
    </LineChart>
  );
};

export default Chart;
