import React, { useState } from "react";

import LoadingSpinner from "loading-app-for-react";

const Search = () => {
  const [coin, setCoin] = useState("");
  const [price, setPrice] = useState("");

  const handleInputChange = (event) => {
    setCoin(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        ` https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.toUpperCase()}USDT`
      );
      const data = await response.json();
      setPrice(data?.weightedAvgPrice);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <form
        className="shadow-2xl bg-gray-200 rounded-xl  shadow-gray-500"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-sm text-center flex flex-col bg-gray-200 p-2 rounded-xl my-2">
          Coinlerin kısaltmaları ile arama yapınız.
          <span>Örn:Btc,eth,sol...</span>
        </h1>
        <input
          className="p-2 outline-none  bg-gray-100"
          type="text"
          value={coin}
          onChange={handleInputChange}
        />
        <button
          className="p-2 outline-none text-white hover:bg-gray-300 bg-yellow-500 font-medium"
          type="submit"
        >
          Coin Ara
        </button>
      </form>
      {coin ? (
        <div className=" bg-gray-50 p-2 flex  justify-center items-center shadow-2xl my-6 shadow-gray-500">
          <div className="mx-2 my-4 ">
            <img
              className="w-8"
              src="https://cryptologos.cc/logos/tether-usdt-logo.png"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="">
              {price && (
                <p className="text-lg font-bold text-center">
                  {`${coin.toUpperCase()} `}{" "}
                  <span className="bg-yellow-500 text-white p-1 rounded-xl font-medium">{`${price.slice(
                    0,
                    7
                  )}`}</span>
                  <span className="text-xs text-yellow-500 mx-2">USDT</span>
                  <h1>{price.priceChangePercent}</h1>
                </p>
              )}
            </h1>
          </div>
        </div>
      ) : (
        <div className="my-6  w-full h-full">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Search;
