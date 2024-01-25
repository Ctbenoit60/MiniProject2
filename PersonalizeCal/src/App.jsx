import React from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css'
import Calendar from './pages/Calendar';
import Homepage from './pages/HomePage';
import ThemeCollection from './pages/ThemeCollection';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Calendar" element={<Calendar />} />
    <Route path='/Theme' element={<ThemeCollection />}/>
    </Routes>
     
    </>
  )
}

export default App
