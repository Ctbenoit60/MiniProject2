// import { Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//     let navigate = useNavigate();
//   const routeChange = () =>{
//     let path = `/Calendar`;
//     navigate(path);

// }
//   return (
//   <div className="Homepage">
//   <h1>Personalize</h1>
//   <img src="/src/assets/logo.png" alt="Personalize Logo"
//   width={"300px"} height={"auto"} />
//   <br />
//   <p>Personalize your digital calendar.</p>
//   <Button size="small" color="primary" onClick={routeChange}> Login </Button>
//   </div>
//   )
//   }

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Personalize</h1>
        <img
          src="/src/assets/logo.png"
          alt="Personalize Logo"
          width={"300px"}
          height={"auto"}
        />
        <br />
        <p>Personalize your digital calendar.</p>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
          required
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          required
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    </form>
  );
}

export default LoginPage;
