import { useRouter } from 'next/router'
import ErrorPage from "next/error";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function ProductSingle({ product }) {
  const router = useRouter()
  const { productId } = router.query

  if (router.isFallback) return <div>Loading...</div>;

  if (!product) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Image src={product.image} width="500" height="500" />
          </div>
          <div className='col-md-6 '>
            <div className='product-details pt-5'>
              <h1>{product.title}</h1>
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
                <a href="#" class="card-link btn btn-primary ">Add to Watchlist</a>
                <a href="#" class="card-link btn btn-primary mx-3">Add to Cart</a>

              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='description'>
            <h3>Product Description</h3>
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

  return {
    paths: [],
    // paths: [], //indicates that no page needs be created at build time
    fallback: true, //indicates the type of fallback
  }
}
