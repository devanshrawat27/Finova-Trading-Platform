import React from "react";
import {Link} from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = React.useState(0);
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick = () => {
    setProfileMenuOpen(!profileMenuOpen)
  };

  const menuClass="menu";
  const menuActiveClass="menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}}
            onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0 ? menuActiveClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration:"none"}}
            onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1 ? menuActiveClass:menuClass}>Orders</p>
            </Link>   
          </li>
          <li>
            <Link to="/holdings" style={{textDecoration:"none"}}
            onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2 ? menuActiveClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{textDecoration:"none"}}
            onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3 ? menuActiveClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{textDecoration:"none"}} 
            onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4 ? menuActiveClass:menuClass}>Funds</p>
            </Link>
          </li>

          <li>  
            <Link to="/apps"
             style={{textDecoration:"none"}}
             onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5 ? menuActiveClass:menuClass}>Apps</p>
            </Link  >
          </li>


        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {profileMenuOpen}
      </div>
    </div>
  );
};

export default Menu;
