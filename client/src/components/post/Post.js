import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
         <img className="postImg" src={post.photo}/>
      )}
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">{post.category.name}</span>
            </div>
            <Link to={`/posts/${post.id}`} className="link">
            <span className="postTitle">
                {post.title}
            </span>
            </Link>
           
            <hr />
            <span className="postDate"> {new Date(post.created_at).toDateString}</span>
        </div>
        <p className="postDesc">{post.description}</p>
    </div>
  )
}
