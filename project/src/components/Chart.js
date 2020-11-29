import React from 'react';
import { Bar } from 'react-chartjs-2';
import { suppliers } from '../suppliers_data';
import { contracts } from '../contracts_data';
import { singleOrder } from '../single_order_data';
import { orders } from '../orders_data';

function Chart({ chartCategory }) {

  var arr = [];
  var vals = [];

  function extractData(dataDictionary) {
    for (var i = 0; i < dataDictionary.length; i++) {
      arr.push(dataDictionary[i]["supplier"])
      vals.push(dataDictionary[i]["value"])
    };
  };

  if (chartCategory === "Spend EUR") {
    extractData(suppliers)
    var bgColor = '#003f5c'
    var axisY = 'EUR'
  } else if (chartCategory === "Contract Duration") {
    extractData(contracts)
    var bgColor = '#665191'
    var axisY = 'Months'
  } else if (chartCategory === "Biggest Single Order") {
    extractData(singleOrder)
    var bgColor = '#d45087'
    var axisY = 'EUR'
  } else if (chartCategory === "Count of Orders") {
    extractData(orders)
    var bgColor = '#ff7c43'
    var axisY = 'Amount'
  }

  const barData = {
    labels: arr,
    datasets: [{
      data: vals,
      backgroundColor: bgColor,
      borderWidth: 3,
      hoverBorderWidth:6,
    }]
  };

  const barOptions = ({
    options: {
        scales: {
          yAxes: [{ ticks: { beginAtZero: true, callback: function(value, index, values) {
             return value.toLocaleString("en-US");
           } }, scaleLabel: { display: true, labelString: axisY}}]
      },
        // title: {display: true, text: 'Data Orgranized In Bars', fontSize: 25},
        legend: {display: false},
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        return parseInt(tooltipValue).toLocaleString("en-US", {style:"currency", currency:"EUR"});
      }
    }
  }
      }
  });

  return (
    <>
      <h3>{chartCategory}</h3>
      <Bar data={barData} options={barOptions.options} height={100} />
    </>
  );
}

export default Chart;
