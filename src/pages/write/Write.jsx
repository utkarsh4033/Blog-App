import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img 
        className="writeImg"
         src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91224.jpg&fm=jpg" alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
