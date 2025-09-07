export default function Login() {
  return(
    <div>
      {/** Header */}
      <div className="">
        <h1 className="">Log In</h1>
      </div>

      <form action="">
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </form>
      <a href="/Signup">Sign Up</a>
    </div>
  )
}