import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Brokerage/>
            <Footer/>
        </>
    )
}

export default PricingPage;