import { use, useState } from "react"

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
    <div className="">

      {/** Header */}
      <div className="">
        <h1 className="">Sign Up</h1>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit}>       
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <a href="/Login">Log In</a>
    </div>
  )
}