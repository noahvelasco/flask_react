import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Visualizer from './components/Visualizer';


function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/add').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Visualizer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
