import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91224.jpg&fm=jpg"
        alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ab nulla ad facere est placeat 
        earum recusandae quibusdam inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ab nulla ad facere est placeat 
        earum recusandae quibusdam inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ab nulla ad facere est placeat 
        earum recusandae quibusdam inventore.
      </p>
    </div>
  )
}
