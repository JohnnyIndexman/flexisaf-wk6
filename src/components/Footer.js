import React from 'react'
import "../css/footer.css"

function Footer() {

    const style = {
        color : 'red',
        size: '30px'
    }
  return (
    <div className='footer'>
        <p>&copy; 2023 Index-Properties <span style={style}>&#9829;</span>
        </p>
    </div>
  )
}

export default Footer