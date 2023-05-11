import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "loading-app-for-react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Bitcoin = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
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
            <h1 className="font-bold text-xl text-[#f7931a] w-full bg-gray-50">
              Binance Coin
            </h1>
            <div className="flex justify-center items-center w-full">
              <img
                className="w-6 h-6 mr-2"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                alt=""
              />

              <h1 className="text-gray-500">
                {prices.weightedAvgPrice.slice(0, 8)}
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

export default Bitcoin;
