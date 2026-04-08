import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Universe from "./Universe";

function ProductsPage(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <LeftImage/>
        <RightImage/>
        <Universe/>
        <Footer/>
        </>
    )
}

export default ProductsPage;