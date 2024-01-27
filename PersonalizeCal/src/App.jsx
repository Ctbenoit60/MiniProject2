import React from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css'
import Calendar from './pages/Calendar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';


function App() {

  return (
    <>
    <div>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/Calendar" element={<Calendar />} />
    <Route path='/Dashboard' element={<DashboardPage />}/>
    </Routes>
     
    </div>
    
    </>
  )
}

export default App


