import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg bg-dark p-10">
  <div className="container-fluid">
  <img className='img-size' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
        <li className="nav-item">
          <a className="nav-link nav-a" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-a" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-a">Disabled</a>
        </li>
      </ul>
      <img className='img-size ms-3' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  </div>
</nav>
  )
}

export default NavBar