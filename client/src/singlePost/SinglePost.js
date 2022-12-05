import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className= "singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                It will be as it is meant to be.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-trash"></i>
                <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Collins</b></span>
                <span className="singlePostDate"> 2 hours ago</span>
            </div>
            <p className="singlePostDesc">Some example word just to so...</p>
        </div>
    </div>
  )
}
