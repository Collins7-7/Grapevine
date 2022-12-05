import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React and Rails</span>
            <span className= "headerTitleLg">GRAPEVINE &#127815; </span>
        </div>
        <img className="headerImg" src="https://images.unsplash.com/photo-1569994651919-14cdfae075ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
    </div>
  )
}
