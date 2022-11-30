import { useRouter } from 'next/router'
import ErrorPage from "next/error";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import styles from '../../styles/ProductItem.module.css'


function ProductSingle({ product }) {
  const router = useRouter()
  const { productId } = router.query
  // console.log(router)
  if (router.isFallback) return <div>Loading...</div>;

  if (!product) {
    return <ErrorPage statusCode={404} />;
  }
  const productUrl = `${process.env.NEXT_PUBLIC_BASE_URL}` + router.asPath

  return (
    <>
      <Head>
            <title> {product.title} </title>
            <meta name="description" content= {product.title} />
            <meta property="og:title" content= {product.title} />
            <meta property="og:description" content= {product.title} />
            <meta property="og:url" content={ productUrl} />
            <meta property="og:type" content="website" />
      </Head>
      <div className='container my-4'>
        <div className='row'>
          <div className='col-md-6'>
            <Image src={product.image} width="500" height="500" className="img-fluid" alt={product.title} />
          </div>
          <div className='col-md-6 '>
            <div className='product-details pt-5'>
              <h1 className='fw-bold fs-4'>{product.title}</h1>
              <div className='product-data'>
                <p>
                  <strong> Price: </strong>
                  <span> ₹ {product.price} </span>
                </p>
                <p> <strong>Product Category:</strong> <span className='text-capitalize'>{product.category}</span></p>
                <p>
                  <strong> Rating: </strong>
                  <span> {product.rating.rate} </span>
                  (<span title={"Total rating given " + product.rating.count}> {product.rating.count} </span>)
                </p>
                <a href="#" className="card-link btn btn-primary ">Add to Watchlist</a>
                <a href="#" className="card-link btn btn-primary mx-3">Add to Cart</a>

              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='description fw-light'>
            <h3 className='fw-semibold fs-5'>Product Description</h3>
            {product.description}
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductSingle

export const getStaticProps = async ({ params }) => {
  console.log(params.productId)
  const response = await fetch(`https://fakestoreapi.com/products/${params.productId}/`);
  const product = await response.json();
  console.log(response)
  return {
    props: {
      product: product || null,
      error: false
    }
  }
}

export const getStaticPaths = async ({ params }) => {
  console.log(params)
  // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}/`);
  // const product = await response.json();

  return {
    paths: [],
    // paths: [], //indicates that no page needs be created at build time
    fallback: true, //indicates the type of fallback
  }
}
