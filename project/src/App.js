import React, { useState } from 'react'
import Chart from './components/Chart'
import Menu from './components/Menu'
import Table from './components/Table'
import './App.css';

function App() {

  const[chartCategory, setChartCategory] = useState("Spend EUR")

  return (

    <div className="app">

      <div className="app_left">
        <div className="app_left_header">
          <h1>Welcome to Supply:Contract Data Analytics system</h1>
          <p>Charts presents the most lucrative contracts of 2019 that Company A signed with top industrial suppliers.</p>
        </div>
        <Chart chartCategory={chartCategory} />
      </div>

      <div className="app_right">
        <div className="app_right_menu">
          <Menu setChartCategory={setChartCategory} />
        </div>
          <Table chartCategory={chartCategory} />
      </div>

    </div>
  );
}

export default App;
