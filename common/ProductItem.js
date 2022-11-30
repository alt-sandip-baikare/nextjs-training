import React from 'react'
import Image from 'next/image'
import styles from "../styles/ProductItem.module.css"
import Link from 'next/link';

function ProductItem({ product }) {
    const shortDescription = product.description.substring(0, 120) + "...";

    return (
        <>
            <div className='col-md-3 py-3'>
                <div className="card" >
                    <Image src={product.image} width="250" height="250" className="card-img-top" />
                    <div className="card-body">
                     <span className='text-capitalize badge text-bg-dark text-white '>{product.category}</span>
                        <Link href={"/products/" + product.id}> <h5 className={ styles.heading + " fs-6 card-title "}>{product.title}</h5> </Link>
                        <p className={styles.product_short_desc + " text-muted card-text small"}>{shortDescription}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> 
                            <span className='float-start'><strong>Rating: </strong> {product.rating.rate} (<span title={"Total rating given " + product.rating.count + " people"}>{product.rating.count})</span></span>
                            <span className='float-end'><strong >Price: ₹ </strong> {product.price}</span>
                        </li>                        
                    </ul>
                    <div className="card-body d-flex">
                        <a href="#" className="card-link btn btn-primary btn-sm">Add to Watchlist</a>
                        <a href="#" className="card-link btn btn-primary btn-sm">Add to Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem