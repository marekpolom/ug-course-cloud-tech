import React, { useState, useEffect } from "react";
import {getHistory, deleteCalc} from '../requests/requests';

const History = ({history, setHistory}) => {
  useEffect(() => {
    const fetchHistory = async () => {
      const hist = await getHistory();
      setHistory(hist);
    }

    fetchHistory();
  }, []);

  return (
    <div className="hist-cont">
      <h2>CALCULATION HISTORY</h2>

      {history.map(item => {
        let op = '';

        switch (item.type) {
          case 'ADD':
            op = '+';
            break;
          case 'SUB':
            op = '-';
            break;
          case 'MULT':
            op = '*';
            break;
          case 'DIV':
            op = '/';
            break;
          default:
            op = '';
        };

        return(
          <div key={item._id} className={'history-item-cont'}>
            <p>{item.num_1}{'\u00A0'}{op}{'\u00A0'}{item.num_2}{'\u00A0'}={'\u00A0'}{item.result}</p>
            <button className={'history-item-delete-btn'} onClick={async () => {
              await deleteCalc(item._id, item.type, item.num_1, item.num_2);
              setHistory(await getHistory());
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default History;
