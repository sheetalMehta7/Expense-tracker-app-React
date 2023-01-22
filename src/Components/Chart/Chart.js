import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const monthlyAmount = props.yearlyChartData.map((data) => data.value);
  const maxAmount = Math.max(...monthlyAmount);
  return (
    <div className="chart">
      {props.yearlyChartData.map((barData) => (
        <ChartBar
          key={barData.label}
          value={barData.value}
          maxValue={maxAmount}
          label={barData.label}
        />
      ))}
    </div>
  );
};

export default Chart;
