import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./signup.css";


export default function SignUp() {
  const [regname, setRegname] = useState("");
  const [regpswd, setRegPswd] = useState("");
  const userData = { Username: regname, Password: regpswd };
  const navigate = useNavigate();
  async function RegisterForm() {
  if (regname && regpswd) {
    await fetch("login/add", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then((response) => response.json());
    navigate("/signin");
  } else {
    alert("Sign Up!");
  }}

  return (
    <>
      <div className="signBox">
        <h2>Register Form</h2>
        <TextField
          id="name"
          required
          label="Username"
          variant="outlined"
          value={regname}
          onChange={(e) => setRegname(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          id="name"
          required
          type="password"
          label="Password"
          variant="outlined"
          value={regpswd}
          onChange={(e) => setRegPswd(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={RegisterForm}>
          Register
        </Button>
      </div>
    </>
  );
}
