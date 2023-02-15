import { useContext, useState } from "react";
import "./write.css"
import {Context} from "../../context/Context"
import axios from "axios";

export default function Write() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  const {user} = useContext(Context);
  const [photo, setPhoto] = useState("")
  const [categoryId, setCategoryId]= useState("") 

  const [errors, setErrors] = useState([]);

  const newPost = {
    user_id: user.id,
    title,
    description,
    photo,
    category_id: categoryId,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => setTitle(data.title) && setDescription(data.description));
        // window.location.replace("/posts/" + response.data._id);
        window.location.replace("/");
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }


  const handleCategoryChange = (e) => {
    if (e.target.value === 'Life') {
      setCategoryId(1)
    } else if (e.target.value === 'Sport') {
      setCategoryId(2)
    } else if (e.target.value === 'Tech') {
      setCategoryId(3)
    } else if (e.target.value === 'Movie') {
      setCategoryId(4)
    } else if (e.target.value === 'Music') {
      setCategoryId(5)
    } else if (e.target.value === 'Fashion') {
      setCategoryId(6)
    } };

  return (
    <div className="write">
      {/* {photo && (
        <img className="writeImg" src={URL.createObjectURL(photo)} alt="" />
      )} */}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
              {/* <i className="writeIcon fa-solid fa-plus"></i> */}
              </label>
                {/* <input type="file" id="fileInput" style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/> */}
                <input type="text" className="photobox" placeholder="Add photo" onChange={(e)=> setPhoto(e.target.value)}/>
                <div >
                <select
                className='filter'
                name="categoryId" 
                id="categoryId"
                onChange={handleCategoryChange}
                >
                    <option >Category</option>
                    <option value="Life"> Life</option>
                    <option value="Sport"> Sport</option>
                    <option value="Tech"> Tech</option>
                    <option value="Movie"> Movie</option> 
                    <option value="Music"> Music</option> 
                    <option value="Fashion"> Fashion</option> 
                  </select> 
                  </div>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}
                onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
              <textarea placeholder="Your story..." type="text" className="writeInput writeText"
              onChange={e=> setDescription(e.target.value)}
              ></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}
