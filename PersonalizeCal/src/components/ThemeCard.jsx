import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";



// export default function MultiActionAreaCard() {

//     let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = `/Calendar`; 
//     navigate(path);
//   }
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="../assets/AnimalCrossing.png"
//           alt="Animal Crossing"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Animal Crossing
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" onClick={routeChange}>
//           Select
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Calendar`; 
    navigate(path);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/AnimalCrossing.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" size="small" color="primary" onClick={routeChange} >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;