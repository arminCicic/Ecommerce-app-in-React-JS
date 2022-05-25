import React from "react";
import "./CoverText.css";

const CoverText = () => {
  const scrollToProductsFunction = () => {
    document.documentElement.scrollTop = 600;
  };

  return (
    <div className="cover-text-container">
      <div className="cover-text">
        OUR SUPPLEMENT STORE SELLS DIETARY SUPPLEMENTS, VITAMINS, PROTEIN
        POWDERS AND HEALTH FOODS TO CUSTOMERS. OUR MAIN GOAL IS TO FULFILL OUR
        CLIENTS FITNESS NEEDS, HEALTH NEEDS, OR DIETARY NEEDS.
      </div>
      <div className="discount-text">
        ENJOY UP TO 40% <br /> OFF SUPPLEMENTS
        <span>The lowest prices of the year are here</span>
        <button className="shop" onClick={scrollToProductsFunction}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CoverText;
