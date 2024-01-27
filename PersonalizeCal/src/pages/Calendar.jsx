import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MyCalendar from '../components/CalendarComponent';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function Calendar() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Theme`; 
    navigate(path);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <h1>Calendar</h1>
      <MyCalendar/>
      <Button size="small" color="primary" onClick={routeChange}> Choose Theme </Button>
    </LocalizationProvider>
  );
}