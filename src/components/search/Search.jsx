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
    <div className="bg-gray-500">
      <form className="bg-gray-200" onSubmit={handleFormSubmit}>
        <input type="text" value={coin} onChange={handleInputChange} />
        <button type="submit">Get Price</button>
      </form>
      {price && <p>{`${coin.toUpperCase()} price is ${price}`}</p>}
    </div>
  );
};

export default Search;
