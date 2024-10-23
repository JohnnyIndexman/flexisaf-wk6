import React from "react";
import "../css/header.css";
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react'

function Header() {
  const [isOpen, setOpen] = useState(false)
  const [ style, setStyle ] = useState({
    display: 'none'
  })

  useEffect(() => {
    isOpen ? setStyle({ display: "flex"}) : setStyle({ display: "none"})
  }, [isOpen]);

  return (
    <div className="header">
      <nav>
        <h2>Index-Properties</h2>
        <div className="head">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/">Shop</a>
          </p>
          <p>
            <a href="/">About</a>
          </p>
          <p>
            <a href="/">Contact</a>
          </p>
          <button>Log In</button>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </nav>

      <div className="hamburger-menu" style={style}>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/">Shop</a>
        </p>
        <p>
          <a href="/">About</a>
        </p>
        <p>
          <a href="/">Contact</a>
        </p>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default Header;
