import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const rows = [];
  for (let i = 0; i < 8; i++) {
      rows.push(
        <div key={i} className="card shadow-sm p-0">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
      );
  }

  return (
    <>
    <div className="banner">
      <div className="bg-accent3 px-4 py-5 text-center bg-opacity-25">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-primary">Dark mode hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4 fw-light">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
            <button type="button" className="btn btn-outline-accent3 btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-4'>
        {rows}
      </div>
    </div>
    </>
    )
}
