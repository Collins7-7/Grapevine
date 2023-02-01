import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {

    const {user, dispatch} = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile_pic, setProfilePic] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });
      const updatedUser = {
       username, 
       email,
       password,
       profile_pic
      };
      try {
        const res = await axios.put("/users/" + user.id, updatedUser);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    };
    console.log(user);
    

  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label> Profile Picture</label>
                <div className="settingsPP">
                    <img src={username === ""? user.profile_pic : profile_pic} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={username===""? user.username : username} onChange={e=> setUsername(e.target.value)}/>
                <label>Profile Picture</label>
                <input type="text" placeholder={profile_pic ===""? user.profile_pic : profile_pic} onChange={e=> setProfilePic(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={email ===""? user.email: email} onChange={e=> setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder="enter password" onChange={e=> setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color:"green", textAlign: "center", marginTop: "20px"}}>Profile has been updated...</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
