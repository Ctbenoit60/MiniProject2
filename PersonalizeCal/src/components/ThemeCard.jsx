import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function MultiActionAreaCard() {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Calendar`; 
    navigate(path);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../assets/AnimalCrossing.jpeg"
          alt="Animal Crossing"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Animal Crossing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={routeChange}>
          Select
        </Button>
      </CardActions>
    </Card>
  );
}

/// How do I pass the Background as a prop that then appears on the homepage?