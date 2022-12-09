import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({})
  
  async function fetchPosts(){
    const response = await fetch("/posts/"+ path)
    const data = await response.json()
    setPost(data)}

  useEffect(()=> {
   fetchPosts()
    },[])

    console.log(post.user)

    

  return (
    <div className= "singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={post.photo} className="singlePostPic"/>
          )}
            
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-trash"></i>
                <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author: 
                <Link to={`/${post.user_id}`} className="link">
                <b>{post.user_id}</b>
                </Link>
                </span>
                <span className="singlePostDate">{new Date(post.created_at).toDateString}</span>
            </div>
            <p className="singlePostDesc">{post.description}</p>
        </div>
    </div>
  )
}
