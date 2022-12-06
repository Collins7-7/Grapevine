import "./signup.css"

export default function Signup() {
  return (
    <div className="signup">
        <span className="signupTitle">Signup</span>
        <form className="signupForm">
            <label>Username</label>
            <input className="signupInput" type="text" placeholder="Enter your username..."/>
            <label>Email</label>
            <input className="signupInput" type="text" placeholder="Enter email..."/>
            <label>Password</label>
            <input className="signupInput" type="password" placeholder="Enter password..."/>
            <button className="signupButt">Signup</button>
        </form>
        <button className="signupLoginButton">Login</button>
    </div>
  )
}
