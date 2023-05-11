import React from "react";

//components
import Bitcoin from "../btc/Bitcoin";
import Ethereum from "../eth/Ethereum";
import Busd from "../busd/Busd";
import Dot from "../dot/Dot";
import Sol from "../sol/Sol";
import Mana from "../mana/Mana";
import Sand from "../sand/Sand";
import Bnb from "../bnb/Bnb";

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
      <Bnb />
    </div>
  );
};

export default BodyComp;
