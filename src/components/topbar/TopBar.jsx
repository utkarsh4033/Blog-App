import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
    return (
        <div className="top">
            <div className="topleft">
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topcenter">
              <ul className="topList">
                <li className="topListItem">
                <Link className="link" to ="/" >HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to ="/" >ABOUT US</Link>
                </li>
                <li className="topListItem"><Link className="link" to ="/" >CONTACT US</Link></li>
                <li className="topListItem"><Link className="link" to ="write" >WRITE</Link></li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
              </ul>
            </div>
            <div className="topright">
              {
                user ? (
                  <img
                className="topImage" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" />
                ) : (
                  <ul className="topList">
                    <li className="topListItem">
                      <Link className="link" to ="/login" >
                        LOGIN
                        </Link>
                    </li>

                    <li className="topListItem">
                      <Link className="link" to ="/register" >
                        REGISTER
                        </Link>
                    </li>
                  </ul>
                )
              }

               
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
