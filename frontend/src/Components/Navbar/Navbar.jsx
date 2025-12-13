import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>

        <li onClick={() => setMenu("Men")}>
          <Link to="/mens">Men</Link>
          {menu === "Men" && <hr />}
        </li>

        <li onClick={() => setMenu("Women")}>
          <Link to="/womens">Women</Link>
          {menu === "Women" && <hr />}
        </li>

        <li onClick={() => setMenu("Kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>

      {/* Login, Cart & Hamburger */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart" className="cart-wrapper">
          <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">0</div>
        </Link>

        {/* Hamburger at END */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

    </div>
    </>
    
  )
}

export default Navbar
