import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "loading-app-for-react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Busd = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr?symbol=BUSDUSDT"
      );
      setPrices(response.data);
    };

    fetchPrices();
  }, [prices, setPrices]);

  return (
    <div className="">
      {prices.weightedAvgPrice ? (
        <div className="bg-gray-100 w-64 h-64 rounded-lg flex justify-center items-center">
          <div className="flex flex-col justify-around items-center h-full w-full">
            <img
              className="w-24"
              src="https://content-api.changenow.io/uploads/busdbsc_321c390762.svg"
              alt=""
            />

            <h1 className="">{prices.symbol}</h1>
            <h1 className="font-bold text-xl text-[#f0b90b] w-full bg-gray-50">
              Busd
            </h1>
            <div className="flex justify-center items-center w-full">
              <img
                className="w-6 h-6 mr-2"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                alt=""
              />

              <h1 className="text-gray-500">{prices.weightedAvgPrice}</h1>
            </div>
            <p
              className={`${
                prices.priceChangePercent > 0
                  ? "text-green-400"
                  : "text-red-400 "
              } text-2xl flex w-full justify-around items-center`}
            >
              <span>%</span>
              {prices.priceChangePercent}
              {prices.priceChangePercent > 0 ? (
                <span className="text-green-500">
                  <AiOutlineArrowUp />
                </span>
              ) : (
                <span className="text-red-500">
                  <AiOutlineArrowDown />
                </span>
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white w-48 h-48 flex justify-center items-center ">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Busd;
