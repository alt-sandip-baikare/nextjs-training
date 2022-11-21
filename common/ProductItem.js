import React from 'react'
import Image from 'next/image'
import styles from "../styles/ProductItem.module.css"
import Link from 'next/link';

function ProductItem({ product }) {
    const shortDescription = product.description.substring(0, 120) + "...";

    return (
        <>
            <div className='col-md-3 py-3'>

                <div class="card" >
                    <Image src={product.image} width="250" height="250" className="card-img-top" />
                    <div class="card-body">
                        <Link href={"/products/" + product.id}> <h5 class={ styles.heading + " card-title "}>{product.title}</h5> </Link>
                        <p class={styles.product_short_desc + " card-text"}>{shortDescription}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> 
                            <strong className=''>Rating: </strong> {product.rating.rate} ({product.rating.count})
                            <strong className='px-2'>Price: </strong> {product.price}
                        </li>                        
                    </ul>
                    <div class="card-body d-flex">
                        <a href="#" class="card-link btn btn-primary btn-sm">Add to Watchlist</a>
                        <a href="#" class="card-link btn btn-primary btn-sm">Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem