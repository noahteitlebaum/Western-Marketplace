export default function Signup() {
  return (
    <div className="">
      {/** Header */}
      <div className="">
        <h1 className="">Sign Up</h1>
      </div>
      <div>
        <form action="">
          <div>          
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="email" placeholder="Email"/>
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" />
          </div>
        </form>
      </div>
      <a href="/Login">Log In</a>
    </div>
  )
}