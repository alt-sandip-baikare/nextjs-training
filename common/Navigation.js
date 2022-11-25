import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Navigation.module.css'


function Navigation() {
  const router = useRouter();
  const NavItems = process.env.NavItems;
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">          
          <Link className="navbar-brand" href="/"> Navbar </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              { NavItems.map( (item, index)=> {
                return <>
                        <li key={index} className={"nav-item px-2 "}>
                          <Link href={item.link} className={(router.asPath === item.link) ? style.active : ''} > {item.name} </Link>
                        </li>
                      </>
              } ) }
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