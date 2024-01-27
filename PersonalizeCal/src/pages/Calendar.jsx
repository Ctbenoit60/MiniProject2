import React, { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MyCalendar from '../components/CalendarComponent';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Calendar() {
  let navigate = useNavigate();
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    // Fetch random image from Unsplash API
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: 'Jmihv2xAFaTuP18WWUFGPz0qLBcIPRBb0WCX2WFzJ4M',
        query: 'nature', // You can change the query based on your preference
      }
    })
    .then(response => {
      const { urls } = response.data;
      setBackgroundImageUrl(urls.regular); // You can use different sizes of the image based on your requirement
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
  }, []);

  const routeChange = () => {
    let path = `/Dashboard`;
    navigate(path);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h1>Calendar</h1>
        <MyCalendar />
        <Button size="small" color="primary" onClick={routeChange}> Choose Theme </Button>
      </LocalizationProvider>
    </div>
  );
}
