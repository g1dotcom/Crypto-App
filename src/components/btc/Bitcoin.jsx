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
      {prices?.weightedAvgPrice ? (
        <div className="bg-gray-100 w-64 h-64 rounded-lg flex justify-center items-center">
          <div className="flex flex-col justify-around items-center h-full w-full">
            <img
              className="w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
              alt=""
            />

            <h1 className="">{prices?.symbol}</h1>
            <h1 className="font-bold text-xl text-[#f7931a] w-full bg-gray-50">
              Bitcoin
            </h1>
            <div className="flex justify-center items-center w-full">
              <img
                className="w-6 h-6 mr-2"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                alt=""
              />

              <h1 className="text-gray-500">
                {prices?.weightedAvgPrice.slice(0, 8)}
              </h1>
            </div>
            <p
              className={`${
                prices?.priceChangePercent > 0
                  ? "text-green-400"
                  : "text-red-400 "
              } text-2xl flex w-full justify-around items-center`}
            >
              <span>%</span>
              {prices?.priceChangePercent}
              {prices?.priceChangePercent > 0 ? (
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
