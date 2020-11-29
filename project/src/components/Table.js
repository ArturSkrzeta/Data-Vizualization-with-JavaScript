import React from 'react';
import NumberFormat from 'react-number-format';
import { suppliers } from '../suppliers_data';
import { contracts } from '../contracts_data';
import { singleOrder } from '../single_order_data';
import { orders } from '../orders_data';
import './Table.css';

function Table({ chartCategory }) {

  if (chartCategory === "Spend EUR") {
    var data = suppliers
  } else if (chartCategory === "Contract Duration") {
    var data = contracts
  } else if (chartCategory === "Biggest Single Order") {
    var data = singleOrder
  } else if (chartCategory === "Count of Orders") {
    var data = orders
  }

  return (
    <div className="table">
      {data.map(row => (
        <tr>
          <td key={row.supplier}>{row.supplier}</td>
          <td key={row.value}><NumberFormat value={row.value} displayType={'text'} thousandSeparator={true} /></td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
