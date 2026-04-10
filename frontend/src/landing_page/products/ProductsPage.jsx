import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      {/* KITE */}
      <LeftSection
        imageURL="/Assets/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        tryDemoText="Try demo →"
        learnMoreText="Learn more →"
        googlePlay="#"
        appStore="#"
      />

      {/* CONSOLE */}
      <RightSection
        imageURL="/Assets/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
        learnMoreText="Learn more →"
      />

      {/* COIN */}
      <LeftSection
        imageURL="/Assets/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience like never before."
        learnMore="#"
        learnMoreText="Coin →"
        googlePlay="#"
        appStore="#"
      />

      {/* KITE CONNECT */}
      <RightSection
        imageURL="/Assets/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="#"
        learnMore="#"
        tryDemoText="API docs →"
        learnMoreText="Learn more →"
      />

      {/* Varasity */}
      <LeftSection
        imageURL="/Assets/varsity.png"
        productName="Varasity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />
      
      <Universe />
    </>
  );
}

export default ProductsPage;
