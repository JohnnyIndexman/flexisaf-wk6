import React from 'react'
import "../css/header.css"

function Header() {
  return (
    <div className='header'>
        <nav>
            <h2>Index-Properties</h2>
            <div className="head">
                <p><a href="/">Home</a></p>
                <p><a href="/">Shop</a></p>
                <p><a href="/">About</a></p>
                <p><a href="/">Contact</a></p>
                <button>Log In</button>
            </div>
        </nav>
    </div>
  )
}

export default Header