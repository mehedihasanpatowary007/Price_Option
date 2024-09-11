import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { studentMathMarks } from "./LineChartData";


const LineCharts = () => {
    return (
      <div className="mx-auto my-10">
          <h1 className="uppercase text-center text-3xl font-semibold italic mb-5">
            Result Graph Using Line chart
          </h1>
        <div className="bg-gray-100 mt-5 p-5">
          <ResponsiveContainer width={1100} height={400}>
            <LineChart data={studentMathMarks}>
              <XAxis dataKey="name" />
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis />
              <Tooltip/>
              <Legend />
              <Line type={"linear"} dataKey="math" stroke="red" />
              <Line type={"linear"} dataKey="english" stroke="green" />
              <Line type={"linear"} dataKey="science" stroke="black" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default LineCharts;