import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"

export default function Login() {

  const userRef = userRef();
  const passWordRef = userRef();
  const {user, dispatch, isFetching} = useContext(Context)

  // const handleSubmit= (e)=> {
  //   e.preventDefault();
  //   dispatch({type:"LOGIN_START"});
  //     fetch("/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({username: userRef.current.value, password: passWordRef.current.value})
  //     }).then((response) => {
  //       if (response.ok){
  //         response.json().then((data)=> dispatch({type:"LOGIN_SUCCESS", payload: data}));
  //       }else {
  //         response.json().then((errorData)=> dispatch({type: "LOGIN_FAILURE"}));
  //       }
  //     });
    
  // };

  console.log(user);
    return (
    <div className='login'>
        <span className="loginTitle" onSubmit={handleSubmit}>Login</span>
        <form className="loginForm">
            <label>Username</label>
            <input className="loginInput" type="text" placeholder="Enter username..." ref={userRef}/>
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter password..." ref={passWordRef}/>
            <button className="loginButton"  type="submit">Login</button>
        </form>
        <button className="signupButton">
          <Link className="link" to="/signup">Signup</Link>
        </button>
    </div>
  )
}
