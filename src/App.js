import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Card from './components/Card';

import data from './data.json';


function App() {
  const [time, setTime] = useState("Weekly");


  return (
    <div className="App">
      <main className="container">
        <Profile time={time} setTime={setTime} />
        {data.map(({title, timeframes}, index) => (
          <Card key={title} title={title} timeframes={timeframes} time={time} />
        ))}
      </main>
    </div>
  );
}

export default App;
