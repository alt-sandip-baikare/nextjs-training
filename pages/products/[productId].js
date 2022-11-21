import { useRouter } from 'next/router'
import ErrorPage from "next/error";
import React from 'react'


function ProductSingle({product}) {
  const router = useRouter()
  const { productId } = router.query

  if (router.isFallback)  return <div>Loading...</div>;
  
  if (!product) {
    return <ErrorPage statusCode={404} />;
  }



  return (
    <>
    { 
    error && 
    <>
    <p> Sorry there is something issue.... try again! </p>
    </> 
    }
    <div className='container'>
      <h1>{product.title}</h1>
      <div className='product-details'>
          <div className='description'>
          {product.description}
          </div>
      </div>
    </div>
    </>
  )
}

export default ProductSingle

export const getStaticProps = async ({params}) =>{
    
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}/`);
    const product = await response.json();
    console.log(response)
    // if(null == product){
    //   return {
    //     props: {
    //       error: true
    //     }
    //   }
    // }
    return {
        props: {
            product,
            error: false
        }
    }
}

export const getStaticPaths = async ({params}) => {

  return {
      paths: [],
      // paths: [], //indicates that no page needs be created at build time
      fallback: true, //indicates the type of fallback
  }
}
