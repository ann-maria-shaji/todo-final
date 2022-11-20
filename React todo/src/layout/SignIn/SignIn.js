import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";


export default function SignIn() {
  const [uname, setUname] = useState("");
  const [pswd, setPswd] = useState("");
  const userData = { Username: uname, Password: pswd };
  const navigate = useNavigate();
  async function SubmitForm() {
    await fetch('login/thisuser', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then(async function(response){
      const uData=await response.json();
      if (uData.length === 0) {
        alert("invalid username/password")
        
      } else {
        localStorage.setItem("auth", true);
        localStorage.setItem("userId", uData[0].id);
        navigate("/user");
      }

    })
  };

  return (
    <>
      <div className="signBox">
        <h2>Sign In Form</h2>
        <TextField
          id="name"
          required
          label="Username"
          variant="outlined"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          id="name"
          required
          type="password"
          label="Password"
          variant="outlined"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={SubmitForm}>
          Sign In
        </Button>
      </div>
    </>
  );
}
