import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../context/Context";
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];


  const [post, setPost] = useState({})
  const {user} = useContext(Context); 
  const navigate= useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
 

  
  async function fetchPosts(){
    const response = await fetch("/posts/"+ path)
    const data = await response.json()
    setPost(data);
    setTitle(data.title);
    setDescription(data.description)
  };

  useEffect(()=> {
   fetchPosts()
    },[]);

console.log(post.user_id=== user.id);

  

  function handleDelete() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (!r.ok){
          throw new Error("Something went wrong. Is the post yours?")
        } navigate("/")
      }).catch((e) => {
        console.log(e)
      });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post.id}`, {
        title,
        description,
      });
      // window.location.reload();
      setUpdateMode(false);
    }catch (err) {}
  };
  

  return (
    <div className= "singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={post.photo} className="singlePostPic"/>
          )}{
            updateMode? (
              <input type="text" value={title} className="singlePostTitleInput" 
              onChange={(e) => setTitle(e.target.value)}
              autoFocus/>
            ):(
              <h1 className="singlePostTitle">
                {title}
                {post.user_id=== user.id? user && (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-trash" onClick = {handleDelete}></i>
                    <i class="singlePostIcon fa-solid fa-pen-to-square" onClick = {()=> setUpdateMode(true)}></i>
                  </div>
                ):(<div></div>)}
                
            </h1>
            )
          }
            
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author: 
                <Link to={`/${post.user_id}`} className="link">
                <b>{post.user_id}</b>
                </Link>
                </span>
                <span className="singlePostDate">{new Date(post.created_at).toDateString}</span>
            </div>
            {updateMode? (<textarea className="singlePostDescInput" value={description} onChange={(e) => setDescription(e.target.value)}/>): (<p className="singlePostDesc">{description}</p>)}
            {
              updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }
            
        </div>
    </div>
  )
}
