import "./App.css";
import BodyComp from "./components/BodyComp/BodyComp";
import SliderComp from "./components/Slider/SliderComp";

//components

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="mx-32">
      <Navbar />
      <div className="w-full">
        {" "}
        <SliderComp />
      </div>
      <BodyComp />
    </div>
  );
}

export default App;
