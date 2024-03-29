import "./sidebar.css"
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(()=>{
    fetch("/categories")
    .then((r) => r.json())
    .then((data) => {
      setCats(data)
    })
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="pineapple" src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
            <p>
                super,awesome!
            </p>
        </div>
        <div className= "sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c =>(
            <Link to="/" className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
            

        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-reddit"></i>
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </div>
        </div>
    </div>
  )
}
