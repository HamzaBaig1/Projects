import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {
    const dataPointsValue = props.dataPoints.map(element => element.value);
    const totalMaximum = Math.max(...dataPointsValue)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint)=>(<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>))}
    </div>
  )
}

export default Chart
