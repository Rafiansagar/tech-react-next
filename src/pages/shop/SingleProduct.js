import React, { Component } from 'react';
import Link from 'next/link';

const SingleProduct = ({ post }) => {
    const {title, image, price, salePrice} = post;
    return (
        <React.Fragment>
            <div className="product-list">
                <div className="image-product">
                    <Link href="/shop/shop-single">
                        <img src={'/' + image} alt="blog image" />
                    </Link>
                    <div className="overlay">
                        <Link href="/shop/shop-single">
                            <a><i class="fas fa-shopping-cart"></i></a>
                        </Link>
                    </div>
                    {salePrice ? <span className="onsale">sale!</span> : ''}

                </div>
                <div className="content-desc text-center">
                    <h2 className="loop-product-title pt-14">
                        <Link href="/shop/shop-single">
                            <a>{title}</a>
                        </Link>
                    </h2>
                    {salePrice ? <div><span className="prev-price">{price}</span><span className="price">{salePrice}</span></div> : <span className="price">{price}</span>}
                </div>
            </div>
        </React.Fragment>

    )
}

export default SingleProduct