import axios from "axios";
import React, { useEffect, useState } from "react";

import LoadingSpinner from "loading-app-for-react";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Sand = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr?symbol=SANDUSDT"
      );
      setPrices(response.data);
    };

    fetchPrices();
  }, [prices, setPrices]);

  return (
    <div className="mx-10 my-10">
      {prices.weightedAvgPrice ? (
        <div className="bg-gray-100 w-64 h-64 rounded-lg flex justify-center items-center">
          <div className="flex flex-col justify-around items-center h-full w-full">
            <img
              className="w-24"
              src="data:image/png;base64,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"
              alt=""
            />

            <h1 className="">{prices.symbol}</h1>
            <h1 className="font-bold text-xl text-[#62688f] w-full bg-gray-200">
              Sandbox
            </h1>
            <div className="flex justify-center items-center w-full">
              <img
                className="w-6 h-6 mr-2"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                alt=""
              />

              <h1 className="text-gray-500">
                {prices.weightedAvgPrice.slice(0, 5)}
              </h1>
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

export default Sand;
