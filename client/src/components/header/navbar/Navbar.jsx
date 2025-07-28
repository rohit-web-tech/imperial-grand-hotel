import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import "./styles.css";

const Navbar = () => {

  const NAV_ITEMS = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Services",
      link: "/services"
    },
  ]

  const [openSideBar, setOpenSideBar] = useState(false);

  const handleToggleSidebar = (status) => {
    setOpenSideBar(status);
  }

  return (
    <nav>

      {/* Navbar for big screens */}
      <div className="desktop">
        {
          NAV_ITEMS?.map((item, index) => (
            <NavLink
              key={index}
              to={item?.link || "/"}
              className={({ isActive }) => (
                `nav-btn ${isActive ? 'active' : ''}`
              )}
            >
              {item?.title || "Home"}
            </NavLink>
          ))
        }
      </div>


      {/* Sidebar opening button */}
      <button
        className='open-btn'
        onClick={() => handleToggleSidebar(true)}
      >
        <Menu />
      </button>

      {/* Navbar (Sidebar) for small screens */}
      <div className={`side-bar ${openSideBar ? "open" : "close"}`}>
        <button
          className='close-btn'
          onClick={() => handleToggleSidebar(false)}
        >
          <X />
        </button>
        {
          NAV_ITEMS?.map((item,index) => (
            <NavLink
              key={index}
              to={item?.link || "/"}
              className={({ isActive }) => (
                `nav-btn ${isActive ? 'active' : ''}`
              )}
              onClick={() => handleToggleSidebar(false)}
            >
              {item?.title || "Home"}
            </NavLink>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar;