import React from 'react';
import Chart from "react-apexcharts";

export default function PieWidget() {
  const param={  
    data: [55,31,14]
,}

const data = {
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    dataLabels: {
      enabled: false
    },
    labels: ['Basic Tree', 'Custom Hot Pant', 'Super Hoodie', ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }

      }}]},
};
  return (
      <div className="widget" style={{minHeight:"240px",minWidth:"350px"}} >
      <div className="left">
        <span className="title" >Top products</span>
        <span > <Chart  options={data.options} series={param.data} type="pie" height="300px" /></span>
      </div>
      <div className="right">
     <p> May - June 2021</p>
      </div>
    </div>
  )
}
