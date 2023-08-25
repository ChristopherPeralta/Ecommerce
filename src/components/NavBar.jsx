import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import { useState } from "react";
import "./NavBar.css";

const Data = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      icon: <AiIcons.AiFillHome />,
    },
  
    {
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
  ];

  export function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
             {/* TOOGLE */}
            <div className="navbar">
            <h1>Logo</h1>
                <div className="menu-button" onClick={showSidebar}>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars />
                        <span>Menú</span>
                    </Link>
                </div>
            </div>
  
            {/* SIDEBAR */}
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose/>
                </Link>
                </li>

                {/* LISTAR EL DATA */}
                {Data.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    )
}

//scss
//const Titulo = styled.h1`
//    color: white;
//      &:hover{
        //color: red;
    //}
//`