import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function LoginPage() { 
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Calendar`; 
    navigate(path);
  }
    return (
    <div className="Homepage">
    <h1>Personalize</h1>
    <p>Personalize your digital calendar.</p>
    <Button size="small" color="primary" onClick={routeChange}> Choose Theme </Button>
    </div>
    )
    }


