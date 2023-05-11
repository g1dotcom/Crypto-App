import React from "react";

//components
import Bitcoin from "../btc/Bitcoin";
import Ethereum from "../eth/Ethereum";
import Busd from "../busd/Busd";

const BodyComp = () => {
  return (
    <div className=" w-full h-screen flex justify-evenly items-center">
      <Bitcoin />
      <Ethereum />
      <Busd />
    </div>
  );
};

export default BodyComp;
