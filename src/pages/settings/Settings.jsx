import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">update your account</span>
          <span className="settingsDeleteTitle">delete your account</span>
        </div>
        <form className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91224.jpg&fm=jpg" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="xyz" />
          <label>Email</label>
          <input type="Email" placeholder="xyz@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="*****" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
    </div>
  )
}
