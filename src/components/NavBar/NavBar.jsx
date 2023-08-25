import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

import { useState } from "react";
import "./NavBar.css";
import {Data} from "./Data"


  export function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
             {/* TOOGLE */}
             <div className="logo-Menu">
                  <h1>Ecommerce</h1>
                  <div className="menu-button" onClick={showSidebar}>
                      <Link to="#" className="menu-bars">
                          <FaIcons.FaBars />
                          <span>Menú</span>
                      </Link>
                  </div>
              </div>
            

                <div className="SearchBar">
                  <div className="SearchBar-module">
                    <input
                      autoComplete="off"
                      className="SearchBar-module_searchBar"
                      id="testId-SearchBar-Input"
                      tabIndex="-1"
                      type="text"
                      placeholder="Buscar en la tienda"
                      value=""
                    />
                  </div>
                  <button className="SearchBar-module_searchBtnIcon">
                    <AiIcons.AiOutlineSearch />
                  </button>
                </div>
      
                <div className="Carrito">
                <button className="Carrito-CarritoIcon">
                    <BsIcons.BsCart3 />
                  </button>
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