import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Card from './components/Card';

import data from './data.json';


function App() {
  const [time, setTime] = useState("Weekly");


  return (
    <div className="App">
      <div className="container">
        <Main time={time} setTime={setTime} />
        {data.map(({title, timeframes}, index) => (
          <Card key={title} title={title} timeframes={timeframes} time={time} />
        ))}
      </div>
    </div>
  );
}

export default App;
