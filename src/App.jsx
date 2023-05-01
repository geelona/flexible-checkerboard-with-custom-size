import React, { useState } from 'react'
import './App.css'
import GridField from './components/GridField/GridField'
import GridControls from './components/GridControls/GridControls'

function App() {

const [xAxis, setXAxis] = useState(3);
const [yAxis, setYAxis] = useState(3);

  return (
    <div className='AppContainer'>
      <GridField count={xAxis * yAxis} xAxis={xAxis} yAxis={yAxis}/>
      <GridControls xAxis={xAxis} yAxis={yAxis} setXAxis={setXAxis} setYAxis={setYAxis}/>
    </div>
  )
}

export default App
