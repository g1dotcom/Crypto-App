import React, { useState } from "react";

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
        `https://api.binance.com/api/v3/ticker/price?symbol=${coin.toUpperCase()}USDT`
      );
      const data = await response.json();
      setPrice(data.price);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <form className="shadow-2xl shadow-gray-500" onSubmit={handleFormSubmit}>
        <input
          className="p-2 outline-none  bg-gray-100"
          type="text"
          value={coin}
          onChange={handleInputChange}
        />
        <button
          className="p-2 outline-none hover:bg-gray-300 bg-gray-200"
          type="submit"
        >
          Get Price
        </button>
      </form>
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
                {`${coin.toUpperCase()} ${price.slice(0, 6)}`}{" "}
                <span className="text-xs text-yellow-500">USDT</span>{" "}
              </p>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
