import React from "react";
import Slider from "react-slick";

//images

const SliderComp = () => {
  //slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className=" my-10 ">
      <Slider className="" {...settings}>
        <div className="!flex items-center bg-[#f0b90b] text-white ">
          <div className="p-10">
            <h1 className="text-6xl font-bold">
              Dünyadanın En Büyük Kripto Para Borsaları.
            </h1>
            <h1 className="text-lg my-4">
              Hemen şimdi trend coinleri alıp satabilirsiniz.
            </h1>
            <button className="bg-[#333333] text-[#f0b90b]   font-bold shadow-xl shadow-[#333333] px-4 py-2 rounded-md">
              <a href="https://www.binance.com/tr">BİNANCE {"-->>"}</a>
            </button>
          </div>
          <img
            className="w-1/4 h-[400px]  "
            src="https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-[#008cd6] text-gray-200">
          <div className="p-10">
            <h1 className="text-6xl font-bold">
              Dünyadanın En Büyük Kripto Para Borsaları.
            </h1>
            <h1 className="text-lg my-4">
              Hemen şimdi trend coinleri alıp satabilirsiniz.
            </h1>
            <button className="bg-white text-[#008cd6]   font-bold shadow-xl shadow-[#333333] px-4 py-2 rounded-md">
              <a href="https://www.huobi.com/">HUOBİ {"-->>"}</a>
            </button>
          </div>
          <img
            className="w-1/4 h-[400px] bg-gray-100"
            src="https://www.huobi.com/learn/wp-content/uploads/2021/08/Bank-_Huobi-logo-square-.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-[#de595a] text-gray-200">
          <div className="p-10">
            <h1 className="text-6xl font-bold">
              Dünyadanın En Büyük Kripto Para Borsaları.
            </h1>
            <h1 className="text-lg my-4">
              Hemen şimdi trend coinleri alıp satabilirsiniz.
            </h1>
            <button className="bg-gray-200 text-[#de595a]   font-bold shadow-xl shadow-[#333333] px-4 py-2 rounded-md">
              <a href="https://www.gate.io/tr">GATEİO {"-->>"}</a>
            </button>
          </div>
          <img
            className="w-1/4 h-[400px] bg-gray-100"
            src="https://assets.bitdegree.org/crypto/storage/media/gate-io-exchange-review-logo-big.o.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
