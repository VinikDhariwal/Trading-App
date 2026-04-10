import React from "react";

function Brokerage() {
    return (
        <div className="container">
            <div className="row mt-5 text-muted text-center p-5">
                <div className="col-4">
                    <img src="/Assets/pricingEquity.svg" alt="equity" />
                    <h3>Free equity delivery</h3>
                    <p className="mt-4  p-2">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="/Assets/intradayTrades.svg" alt="Intraday" />
                    <h3>Intraday and F&O trades</h3>
                    <p className="mt-4  p-2">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="/Assets/pricingMF.svg" alt="mutual-fund" />
                    <h3>Free direct MF</h3>
                    <p className="mt-4  p-2">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}

export default Brokerage;