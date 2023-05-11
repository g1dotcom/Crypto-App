import React from "react";

//components
import Bitcoin from "../btc/Bitcoin";
import Ethereum from "../eth/Ethereum";
import Busd from "../busd/Busd";
import Dot from "../dot/Dot";
import Sol from "../sol/Sol";
import Mana from "../mana/Mana";
import Sand from "../sand/Sand";

const BodyComp = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-around  items-center">
      <Bitcoin />
      <Ethereum />
      <Busd />
      <Dot />
      <Sol />
      <Mana />
      <Sand />
    </div>
  );
};

export default BodyComp;
