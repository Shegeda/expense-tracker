import React from "react";

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);


  return <div className="chart">
    {props.dataPoints.map(dataPoit =>
      <ChartBar
        key={dataPoit.label}
        value={dataPoit.value}
        maxValue={totalMaximum}
        label={dataPoit.label}
      />)}
  </div>
}

export default Chart;