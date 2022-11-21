import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link href='/'> Home </Link>
              </li>
              <li className="nav-item px-2">
                <Link href='/about'> About </Link>
              </li>
              <li className="nav-item px-2">
                <Link href='/courses'> Courses </Link>
              </li>
              <li className="nav-item px-2">
                <Link href='/facilities'> Facilities </Link>
              </li>
              <li className="nav-item px-2">
                <Link href='/products'> Products </Link>
              </li>
              <li className="nav-item px-2">
                <Link href='/contact'> Contact </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation