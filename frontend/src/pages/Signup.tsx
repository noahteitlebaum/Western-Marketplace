import { use, useState } from "react"

import "../css/Signup.css"

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({username, email, password})

    // send information to backend to create an account.
  }
  
  return (
    <div className="container">

      {/** Left side - form section */}
      <div className="form-section">
        <h1 className="title"> Sign Up </h1>
        <form className="form" onSubmit={handleSubmit}>       
          <input 
            type="text" 
            placeholder="Username"
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <button type="submit"> Sign Up </button>
        </form>

        <a href="/Login" className="login-link"> Log In </a>
      </div>
      
      {/** Right side - image */}
      <div className="image-section">
        <img src="../assets/images/western-wallpaper.jpg" alt="Signup visual" />
      </div>
    </div>
  )
}