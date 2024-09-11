import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { salesData } from "./BarChartData";

const BarCharts = () => {
    return (
      <div className="mx-auto my-10">
        <h1 className="uppercase text-center text-3xl font-semibold italic mb-5">
          Sales Product in a month
        </h1>
        <div className="bg-gray-100 p-5">
          <ResponsiveContainer width={1100} height={400}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="black" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default BarCharts;