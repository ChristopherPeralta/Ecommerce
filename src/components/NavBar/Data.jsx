import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';

export const Data = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
  
    {
      title: "Nosotros",
      path: "/nosotros",
      cName: "nav-text",
      icon: <BiIcons.BiSolidGroup />,
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
/*
    {
      title: "Carrito",
      path: "/carrito",
      icon: <FaIcons.FaShoppingCart />,
      cName: "nav-text",
    },
*/
    {
      title: "Contacto",
      path: "/contacto",
      icon: <BsIcons.BsHeadset />,
      cName: "nav-text",
    },
  ];