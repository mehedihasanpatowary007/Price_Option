import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { MobileMarketShareData } from "./MobileMarketShareData";
import { LaptopMarketShareData } from "./LaptopMarketShareData";

const PieCharts = () => {
    return (
      <div className="mx-auto my-10">
      <h1 className="uppercase text-center text-3xl font-semibold italic mb-5">Laptop & Mobile market share 2024</h1>
        <div className="">
          <ResponsiveContainer width={730} height={250}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={LaptopMarketShareData}
                dataKey="marketShare"
                nameKey="brand"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                label
              />
              <Pie
                data={MobileMarketShareData}
                dataKey="marketShare"
                nameKey="brand"
                cx="50%"
                cy="50%"
                outerRadius={50}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default PieCharts;