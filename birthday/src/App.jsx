import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome'
import Next from './pages/Next';
import Moments from './pages/Moments';
import Us from './pages/Us';
import Random from './pages/Random';
import Sum from './pages/Sum'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/next" element={<Next />} />
      <Route path="/moments" element={<Moments />} />
      <Route path="/us" element={<Us />} />
      <Route path="/random" element={<Random />} />
      <Route path="/wishes/sum" element={<Sum />} />
    </Routes>
  );
}

export default App