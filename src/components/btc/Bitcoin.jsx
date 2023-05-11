import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "loading-app-for-react";

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
    <div className="">
      {prices.weightedAvgPrice ? (
        <div className="bg-gray-100 w-64 h-64 rounded-lg flex justify-center items-center">
          <div className="flex flex-col justify-around items-center h-full w-1/2">
            <img
              className="w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
              alt=""
            />

            <h1 className="">{prices.symbol}</h1>
            <h1 className="font-bold text-xl text-[#f7931a]">Bitcoin</h1>
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
                  ? "text-green-500  font-bold"
                  : "text-red-500  font-bold"
              } text-2xl`}
            >
              <span className=" ">%</span>
              {prices.priceChangePercent}
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