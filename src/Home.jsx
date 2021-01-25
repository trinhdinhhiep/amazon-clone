import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt="background"
        />

        <div className="home__row">
          <Product
            id={1}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
            title="The learn startup"
            price={11.99}
            rating={5}
          />
          <Product
            id={2}
            image="https://m.media-amazon.com/images/I/41r+e+VFbtL._AA210_.jpg"
            title="Instant Pot Duo Plus Mini 9-in-1 Electric Pressure Cooker, 3 Qt"
            price={79.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            image="https://m.media-amazon.com/images/I/51R9slfYxoL._AA210_.jpg"
            title="Up to 34% off Canon products"
            price={179.0}
            rating={5}
          />

          <Product
            id={4}
            image="https://m.media-amazon.com/images/I/41UcTt0hMbL._AA210_.jpg"
            title="Save on Samsung S20"
            price={799.99}
            rating={5}
          />
          <Product
            id={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hFnO+NtQL._SCLZZZZZZZ___AA210_.jpg"
            title="Keyboard Case for iPad Pro 11 2020 (2nd Generation), iPad Pro 11 Case with Keyboard 2018 - Wirele..."
            price={31.98}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            image="https://m.media-amazon.com/images/I/91K9SyGiyzL._AC_UY218_.jpg"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
            price={114.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
