import React from 'react'
import { Link } from 'react-router-dom'
const Headers = () => {
    return (
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#"><Link to="/" style={{textDecoration:'none', color:'white'}}>Fashion Store</Link></a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
      </div>
    </nav>
    )
}

export default Headers
