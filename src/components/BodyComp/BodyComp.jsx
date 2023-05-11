import React from "react";

//components
import Bitcoin from "../btc/Bitcoin";
import Ethereum from "../eth/Ethereum";

const BodyComp = () => {
  return (
    <div className=" w-full h-screen flex justify-evenly items-center">
      <Bitcoin />
      <Ethereum />
    </div>
  );
};

export default BodyComp;
