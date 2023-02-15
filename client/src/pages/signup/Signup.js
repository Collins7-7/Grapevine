import { useState } from "react"
import { Link } from "react-router-dom"
import "./signup.css"

export default function Signup() {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")
  const[error, setError] = useState(false)


  const formData = {
    username,
    password,
    email, 
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      if (response.ok){
        response.json().then((data)=> data && window.location.replace("/login"));
        setUsername("");
        setEmail("");
        setPassword("");
      }else {
        response.json().then((errorData)=> setError(errorData.errors));
      }
    });
    
  };


  return (
    <div className="signup">
        <span className="signupTitle">Signup</span>
        <form className="signupForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className="signupInput" type="text" placeholder="Enter your username..."
            onChange={e=>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input className="signupInput" type="text" placeholder="Enter email..."
             onChange={e=>setEmail(e.target.value)}
            />
            <label>Password</label>
            <input className="signupInput" type="password" placeholder="Enter password..."
             onChange={e=>setPassword(e.target.value)}
            />
            <button className="signupButt" type="submit">Signup</button>
        </form>
        <button className="signupLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
        <span style={{color:"red",
      marginTop: "10px"}}>{error}</span>
    </div>
  )
}
