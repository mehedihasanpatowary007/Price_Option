
import LineCharts from "./Components/Line Chart/LineCharts";
import PriceOptions from "./Components/Price Options/PriceOptions";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import BarCharts from "./Components/Bar Chart/BarCharts";
import PieCharts from "./Components/Pie Chart/PieCharts";



function App() {

  return (
    <>
        <Navbar/>
        <PriceOptions/>
        <LineCharts/>
        <BarCharts/>
        <PieCharts/>
        <Footer/>
    </>
  );
}

export default App
