import React, { Component } from 'react';

import posts from '../../sample-data/shop-item/products.json';
import singlePost from '../../sample-data/shop-item/single-product.json';
import SingleProduct from './SingleProduct';
import ProductDetails from './ProductDetails';

const ShopDetailsMain = ({ shop }) => {
    return (
        <React.Fragment>
            <div id="rs-single-shop" className="rs-single-shop pt-120 pb-80 md-pt-80 sm-pb-60">
                <div className="container">
                    {singlePost && singlePost.map((post, i) => (
                        <div key={i}>
                            <ProductDetails post={post} />
                        </div>
                    )).slice(0, 1)}
                </div>
            </div>
            
            <div className="rs-shop-part pb-120 md-pb-74">
                <div className="container">
                    <h4 className="title pb-23 md-pb-10">Related products</h4>
                    <div className="row">
                        {posts && posts.map((post, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-6 md-mb-44">
                                <SingleProduct post={post} />
                            </div>
                        )).slice(0, 3)}
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShopDetailsMain;