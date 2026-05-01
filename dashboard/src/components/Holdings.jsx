import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineGraph } from "./LineGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // ✅ Fetch data safely
  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:8080/allHoldings");
      setAllHoldings(res.data || []);
    } catch (err) {
      console.error("Error fetching holdings:", err);
      setAllHoldings([]);
    }
  };

  useEffect(() => {
    fetchHoldings();
    const interval = setInterval(fetchHoldings, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Calculations (safe)
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment === 0 ? 0 : (pnl / totalInvestment) * 100;

  // ✅ Chart data (safe)
  const chartData =
    allHoldings.length > 0
      ? {
          labels: allHoldings.map((stock) => stock.name),
          datasets: [
            {
              data: allHoldings.map(
                (stock) => stock.price * stock.qty
              ),
              borderColor: pnl >= 0 ? "#00b386" : "#ff4d4f",
              backgroundColor:
                pnl >= 0
                  ? "rgba(0, 179, 134, 0.1)"
                  : "rgba(255, 77, 79, 0.1)",
              tension: 0.4,
              fill: true,
              borderWidth: 2,
            },
          ],
        }
      : null;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

     

      {/* ✅ Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const stockPnl = currValue - stock.avg * stock.qty;

              const profClass = stockPnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {stockPnl.toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ Summary */}
      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            {pnl.toFixed(2)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
       {/* ✅ Chart */}
      {chartData && <LineGraph data={chartData} />}
    </>
  );
};

export default Holdings;