import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter email..."/>
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter password..."/>
            <button className="loginButton">Login</button>4
        </form>
        <button className="signupButton">Signup</button>
    </div>
  )
}
