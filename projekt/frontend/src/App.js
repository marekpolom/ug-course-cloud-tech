import "./App.css";
import { useState, useEffect } from 'react';
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import History from "./components/History";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <div className="App">
      <h1>SIMPLE CALCULATOR</h1>
      <div className='op-cont'>
        <div className='op-ch-cont'>
          <Addition setHistory={setHistory}/>
          <Subtraction setHistory={setHistory}/>
        </div>
        <div className='op-ch-cont'>
          <Multiplication setHistory={setHistory}/>
          <Division setHistory={setHistory}/>
        </div>
      </div>
      <History history={history} setHistory={setHistory}/>
    </div>
  );
}

export default App;
