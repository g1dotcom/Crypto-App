import "./App.css";
import BodyComp from "./components/BodyComp/BodyComp";
import SliderComp from "./components/Slider/SliderComp";
import Footer from "./components/footer/Footer";

//components

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App mx-32">
      <Navbar />
      <div className="w-full">
        {" "}
        <SliderComp />
      </div>
      <BodyComp />
      <Footer />
    </div>
  );
}

export default App;
