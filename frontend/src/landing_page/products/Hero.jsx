import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container text-center py-5">
            <div className="row justify-content-center">
                
                <div className="col-lg-8">
                    <h2 className="fw-semibold mb-3">
                        Zerodha Products
                    </h2>

                    <p className="text-muted fs-5 mb-3">
                        Sleek, modern, and intuitive trading platforms
                    </p>

                    <p className="text-muted mb-5">
                        Check out our&nbsp;
                        <Link to="/" className="text-decoration-none">
                            investment offerings &nbsp;<i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </p>
                </div>
                <hr className="text-muted mt-5"></hr>
            </div>
        </div>
    );
}

export default Hero;