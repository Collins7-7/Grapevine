import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {

  const [posts, setPosts] = useState([]);

  const location = useLocation();
  console.log(location)

  useEffect(()=>{

    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data)
      });
  },[])

  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
    
  )
}
