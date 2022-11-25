import React from 'react'
import ProductItem from '../../common/ProductItem';
import { useRouter } from 'next/router';
import Head from 'next/head'

function products(props) {
    const { products } = props;
    const router = useRouter()

    if (router.isFallback) return <div>Loading...</div>;

    return (
        <>
        <Head>
            <title> Products </title>
        </Head>
        <div className='container'>
            <div className='row'>
                <h1 className='h1 py-2'>Products</h1>
            </div>
            <div className='products row'>
                {
                    products.length ? products.map((product) =>
                        <ProductItem key={product.id} product={product} />
                    )
                        :
                        <>
                            <p> Products Not found. Please try again. </p>
                        </>
                }
            </div>
        </div>
        </>
    )
}

export default products

export const getStaticProps = async () => {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json()
    return {
        props: {
            products: data
        }
    }
}