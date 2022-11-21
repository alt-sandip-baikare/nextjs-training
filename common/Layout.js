import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
    const {children, hideFooter} = props;
  return (
    <>
    <Header />
        {children}
    
    { hideFooter ?? (<Footer />) }
    </>
  )
}

export default Layout