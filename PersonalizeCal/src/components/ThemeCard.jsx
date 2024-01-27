
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

function UnsplashCards() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: 10,
        client_id: 'Jmihv2xAFaTuP18WWUFGPz0qLBcIPRBb0WCX2WFzJ4M'
      }
    })
    .then(response => {
      setImages(response.data);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
  }, []);

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Calendar`; 
      navigate(path);
    }

  return (
    <div className="container">
      <h1 className="text-center my-5">Theme Cards</h1>
      <Button size="small" color="primary" onClick={routeChange}>
         Go back
       </Button>
       <br />
      <div className="row">
        {images.map(image => (
          <div key={image.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={image.urls.small} />
              <Card.Body>
                <Card.Title>{image.alt_description}</Card.Title>
                <Card.Text>
                  Photo by {image.user.name}
                </Card.Text>
                <Button variant="primary" href={image.links.html} target="_blank">View on Unsplash</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnsplashCards;
