import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Some title of some sort.
            </span>
            <hr />
            <span className="postDate"> 2 hours ago</span>
        </div>
        <p className="postDesc"> Afforest - establish a forest on previously unforested land.</p>
    </div>
  )
}
