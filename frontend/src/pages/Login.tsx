import { useState } from "react"

import "../css/Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check backend for account information.
  }

  return (
    <div>
      {/** Header */}
      <div className="">
        <h1 className=""> Log In </h1>
      </div>

      <form action="" onSubmit={handleSubmit}>
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
        <button type="submit"> Log In </button>
      </form>
      <a href="/Signup"> Sign Up </a>
    </div>
  )
}