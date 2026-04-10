import React from "react";
import { Link } from "react-router-dom";

function Team() {
    return (
        <div className="container">
            <div className="row align-items-center">

                <div className="col-2"></div>

                {/* IMAGE */}
                <div className="col-4 text-center mt-5 mb-5">
                    <img 
                        src="Assets/nithinKamath.jpg" 
                        alt="Nithin Kamath" 
                        className="rounded-circle img-fluid"
                        style={{ width: "250px", height: "250px", objectFit: "cover" }}
                    />
                </div>

                {/* TEXT */}
                <div className="col-4 mt-5 mb-5">
                    <h3 className="text-muted mb-4">People</h3>

                    <p className="text-muted">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome 
                        the hurdles he faced during his decade long stint as a trader. 
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p className="text-muted">
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) 
                        and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p className="text-muted">Playing basketball is his zen.</p>

                    <p className="text-muted">
                        Connect on &nbsp;
                        <Link to="/" style={{textDecoration:"none"}}>Homepage</Link>&nbsp; /&nbsp;
                        <Link to="/" style={{textDecoration:"none"}}>TradingQ&A</Link> &nbsp;/&nbsp;
                        <Link to="/" style={{textDecoration:"none"}}>Twitter</Link>
                    </p>
                </div>

                <div className="col-2"></div>

            </div>
        </div>
    );
}

export default Team;