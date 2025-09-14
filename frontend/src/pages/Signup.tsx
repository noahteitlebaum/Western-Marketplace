import { useState } from "react"

import "../css/Signup.css"

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Validate email address
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log({username, email, password})

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText);
        return;
      }
    } catch (err) {
      setError("Something went wrong. Please try again");
      console.log(err);
    }
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
          <button className="signup-button" type="submit"> Sign Up </button>
        </form>
        {error && <p className="login-link">{error}</p>}

        <a href="/Login" className="login-link"> Log In </a>
      </div>
      
      {/** Right side - image */}
      <div className="image-section">
        <img src="/assets/images/western-wallpaper.jpg" alt="Signup visual" />
      </div>
    </div>
  )
}