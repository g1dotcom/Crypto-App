import "./App.css";
import BodyComp from "./components/BodyComp/BodyComp";
import SliderComp from "./components/Slider/SliderComp";
import FFF from "./components/fff";
import Footer from "./components/footer/Footer";

//components

import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App mx-32">
      <Navbar />
      <div className="w-full">
        <SliderComp />
      </div>

      <FFF />
      <div className="w-full my-10">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Popüler Kripto Paralar
        </h1>
        <BodyComp />
      </div>

      <Footer />
    </div>
  );
}

export default App;
