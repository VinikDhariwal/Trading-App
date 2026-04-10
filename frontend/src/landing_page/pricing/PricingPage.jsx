import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";

function PricingPage(){
    return (
        <>
            <Hero/>
            <Brokerage/>
            <OpenAccount/>
        </>
    )
}

export default PricingPage;