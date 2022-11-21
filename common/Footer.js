import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className='footer bg-dark text-white py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h3>About</h3>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
              </div>
            </div>
            <div className='col-4'>
              <h3>Quick Links</h3>
              <div>
                <ul>
                  <li>
                    <Link href='/facilities/lab'> Lab </Link>
                  </li>
                  <li>
                    <Link href='/facilities/sport'> Sport </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-4'>
              <h3>Contact</h3>
              <div>
                <p>
                  ABC Private Ltd,<br/>
                  Sector 23, Gurgaon,<br/>
                  Hariyana-78
                </p>
                <p> Phone: +91-9897348437</p>
              </div>
            </div>
          </div>
          <p className='text-center'>Copyright &copy; Altudo Consultancy Services</p>
        </div>
      </footer>
    </>
  )
}

export default Footer