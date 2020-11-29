import React from 'react';
import './Menu.css';

function Menu({setChartCategory}) {

  const data = ['Spend EUR','Contract Duration','Biggest Single Order','Count of Orders']

  function switchChart(name) {
    setChartCategory(name)
  };

  return (
    <form className="buttons">
      {data.map(row => (
        <button type="button" key={row} onClick={() => switchChart(row)}>{row}</button>
      ))}
    </form>
  );

}

export default Menu;
