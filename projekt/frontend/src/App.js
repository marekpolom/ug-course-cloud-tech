import "./App.css";
import { useState, useEffect } from 'react';
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import History from "./components/History";

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
      </div>
      <History history={history}/>
    </div>
  );
}

export default App;
