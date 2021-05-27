import "./App.css";
import { useState, useEffect } from 'react';
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import History from "./components/History";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";
import CalcRes from "./components/CalcRes";

function App() {
  const [history, setHistory] = useState([]);
  const [calcRes, setCalcRes] = useState('');

  return (
    <div className="App">
      <h1>SIMPLE CALCULATOR</h1>
      <div className='op-cont'>
        <div className='op-ch-cont'>
          <Addition setHistory={setHistory} setCalcRes={setCalcRes}/>
          <Subtraction setHistory={setHistory} setCalcRes={setCalcRes}/>
        </div>
        <div className='op-ch-cont'>
          <Multiplication setHistory={setHistory} setCalcRes={setCalcRes}/>
          <Division setHistory={setHistory} setCalcRes={setCalcRes}/>
        </div>
      </div>
      <CalcRes calcRes={calcRes}/>
      <History history={history} setHistory={setHistory}/>
    </div>
  );
}

export default App;
