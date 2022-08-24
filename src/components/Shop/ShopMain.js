import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
library.add(fal)

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- shop-banner-area start --> */}
                <section className="shop-banner-area pt-120 pb-120">
                    <div className="container">
                        <div className="row mt-20">
                            <div className="col-xl-4 col-lg-5 col-md-6">
                                <div className="product-showing mb-40">
                                    <p>Showing 1–22 of 32 results</p>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-6">
                                <div className="shop-tab f-right">
                                    <ul className="nav text-center" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                                                    aria-selected="true"><i><FontAwesomeIcon icon={['fas', 'list-ul']} /></i> </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                                aria-selected="false"><i><FontAwesomeIcon icon={['fas', 'th-large']} /></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-filter mb-40 f-right">
                                    <form action="#">
                                        <select name="pro-filter" id="pro-filter">
                                            <option value="1">Shop By </option>
                                            <option value="2">Top Sales </option>
                                            <option value="3">New Product </option>
                                            <option value="4">A to Z Product </option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40"> 
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img1.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Black Headphone</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img2.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Women Smart Bag</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img3.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Table</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">New Men Collection</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img4.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Chair</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Black Headphone</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img5.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Women Smart Bag</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img6.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Light</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Women Smart Bag</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img7.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Headphone</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Black Headphone</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img8.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">table</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Women Smart Bag</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-40">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img9.jpg" alt="" /></Link>
                                                        <div className="product-action text-center">
                                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                                            <a href="#"><i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                            <Link href="/shop/shop-single"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product__content text-center pt-35">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Black Headphone</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row mb-30">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-20">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img2.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">New Men Collection</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <div className="product-action-list">
                                                        <a className="btn" href="#"><span className="btn-text">add to cart <i><FontAwesomeIcon icon={['far', 'long-arrow-right']} /></i></span> </a>
                                                        <a className="action-btn" href="#"> <i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                        <a className="action-btn" href="/porduct-details"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-20">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img3.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">New Men Collection</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <div className="product-action-list">
                                                        <a className="btn" href="#"><span className="btn-text">add to cart <i><FontAwesomeIcon icon={['far', 'long-arrow-right']} /></i></span> </a>
                                                        <a className="action-btn" href="#"> <i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                        <a className="action-btn" href="/porduct-details"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-20">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img4.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Women Smart Bag</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <div className="product-action-list">
                                                        <a className="btn" href="#"><span className="btn-text">add to cart <i><FontAwesomeIcon icon={['far', 'long-arrow-right']} /></i></span> </a>
                                                        <a className="action-btn" href="#"> <i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                        <a className="action-btn" href="/porduct-details"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-20">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img5.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">Black Headphone</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <div className="product-action-list">
                                                        <a className="btn" href="#"><span className="btn-text">add to cart <i><FontAwesomeIcon icon={['far', 'long-arrow-right']} /></i></span> </a>
                                                        <a className="action-btn" href="#"> <i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                        <a className="action-btn" href="/porduct-details"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-50">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product mb-20">
                                                    <div className="product__img">
                                                        <Link href="/shop/shop-single"><img src="assets/img/shop/img6.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="product-list-content pt-10">
                                                    <div className="product__content mb-20">
                                                        <span className="pro-cat"><a href="#">Cloths</a></span>
                                                        <h4 className="pro-title"><Link href="/shop/shop-single">New Men Collection</Link></h4>
                                                        <div className="price">
                                                            <span>$95.00</span>
                                                            <span className="old-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate.</p>
                                                    <div className="product-action-list">
                                                        <a className="btn" href="#"><span className="btn-text">add to cart <i><FontAwesomeIcon icon={['far', 'long-arrow-right']} /></i></span> </a>
                                                        <a className="action-btn" href="#"> <i><FontAwesomeIcon icon={['fal', 'heart']} /></i></a>
                                                        <a className="action-btn" href="/porduct-details"><i><FontAwesomeIcon icon={['fas', 'expand']} /></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="basic-pagination basic-pagination-2 text-center mt-20">
                                    <ul>
                                        <li><a href="#"><i><FontAwesomeIcon icon={['fas', 'angle-double-left']} /></i></a></li>
                                        <li><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li><a href="#"><i><FontAwesomeIcon icon={['fas', 'ellipsis-h']} /></i></a></li>
                                        <li><a href="#"><i><FontAwesomeIcon icon={['fas', 'angle-double-right']} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- shop-banner-area end --> */}
            </React.Fragment>
        );
    }
}

export default Shop;