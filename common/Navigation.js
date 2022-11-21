import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <>
        <Link href='/'> Home </Link>
        <Link href='/about'> About </Link>
        <Link href='/courses'> Courses </Link>
        <Link href='/facilities'> Facilities </Link>
        <Link href='/contact'> Contact </Link>
    </>
  )
}

export default Navigation