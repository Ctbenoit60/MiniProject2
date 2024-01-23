import React from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css'
import Calendar from './pages/Calendar';
import Homepage from './pages/HomePage';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Calendar" element={<Calendar />} />
    </Routes>
     
    </>
  )
}

export default App
