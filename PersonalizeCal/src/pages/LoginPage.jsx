
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignIn from "../components/LoginSignUp";


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
        <SignIn></SignIn>
      </div>
    </form>
  );
}

export default LoginPage;
