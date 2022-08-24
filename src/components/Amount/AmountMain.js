import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AmountMain extends Component {

    render() {
        
        return (
            <React.Fragment>
                {/* <!-- pricing-area-start --> */}
                <div className="pricing-area pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-80">
                                    <span className="border-left-1"></span>
                                    <span>our pricing</span>
                                    <span className="border-right-1"></span>
                                    <h1>Exclusive Pricing Planning</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper single-pricing text-center mb-30">
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-1.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>basic plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>15.99</h1>
                                    </div>
                                    <div className="pricing-button">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper single-pricing active text-center mb-30">
                                    <div className="pricing-tag">
                                        <span>popular plan</span>
                                    </div>
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-2.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>standard plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>49.99</h1>
                                    </div>
                                    <div className="pricing-button active">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper single-pricing text-center mb-30">
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-3.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>premium plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>89.99</h1>
                                    </div>
                                    <div className="pricing-button">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- pricing-area-end --> */}

                {/* <!-- pricing-area-start --> */}
                <div className="pricing-area pt-120 pb-100" style={{ 'background-image': 'url(assets/img/bg/bg-10.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                                    <span className="border-left-1"></span>
                                    <span>our pricing</span>
                                    <span className="border-right-1"></span>
                                    <h1>Exclusive Pricing Planning</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper text-center mb-30">
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-1.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>basic plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>15.99</h1>
                                    </div>
                                    <div className="pricing-button">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper active text-center mb-30">
                                    <div className="pricing-tag">
                                        <span>popular plan</span>
                                    </div>
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-2.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>standard plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>49.99</h1>
                                    </div>
                                    <div className="pricing-button active">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper text-center mb-30">
                                    <div className="pricing-icon">
                                        <img src="assets/img/icon/p-3.png" alt="" />
                                    </div>
                                    <div className="pricing-top-text">
                                        <h3>premium plan</h3>
                                    </div>
                                    <div className="pricing-menu">
                                        <ul>
                                            <li>IT Solutions</li>
                                            <li>Software Development</li>
                                            <li>UX/UI Strategy</li>
                                            <li>IT Consulting</li>
                                            <li>Product Design</li>
                                        </ul>
                                    </div>
                                    <div className="price-count">
                                        <h1><span className="usd">$</span>89.99</h1>
                                    </div>
                                    <div className="pricing-button">
                                        <a href="#"> <span className="pricings-button">select plan <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- pricing-area-end --> */}

                {/* <!-- blog-area-start --> */}
                <div className="blog-area pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-75">
                                    <span className="border-left-1"></span>
                                    <span>our blog</span>
                                    <span className="border-right-1"></span>
                                    <h1>Reads Our Latest  News & Blog</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="blog-wrapper blog-2-wrapper">
                                    <div className="blog-img">
                                    <Link href="/blog-deatils">
                                        <a><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
                                    </Link>
                                    </div>
                                    <div className="blog-meta">
                                        <span> <i className="far fa-user"></i> Soamlia</span>
                                        <span> <i className="fal fa-calendar-alt"></i> 05 Aug 2019</span>
                                        <span> <i className="far fa-comments"></i> (03)</span>
                                    </div>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="/blog-deatils">
                                                <a href="blog-details">Monthly Web Development To Update React Hooks Cons</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                        <Link href="/blog-deatils">
                                            <a><span className="blog-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="blog-wrapper blog-2-wrapper">
                                    <div className="blog-img">
                                        <Link href="/blog-deatils">
                                            <a><img src="assets/img/blog/blog-4.jpg" alt="" /></a>
                                        </Link>
                                    </div>
                                    <div className="blog-meta">
                                        <span> <i className="far fa-user"></i> Soamlia</span>
                                        <span> <i className="fal fa-calendar-alt"></i> 05 Aug 2019</span>
                                        <span> <i className="far fa-comments"></i> (03)</span>
                                    </div>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="/blog-deatils">
                                                <a>Detailed Comparison Between WordPress & October CMS</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                        <Link href="/blog-deatils">
                                            <a><span className="blog-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="blog-wrapper blog-2-wrapper">
                                    <div className="blog-img">
                                        <Link href="/blog-deatils">
                                            <a><img src="assets/img/blog/blog-5.jpg" alt="" /></a>
                                        </Link>
                                    </div>
                                    <div className="blog-meta">
                                        <span> <i className="far fa-user"></i> Soamlia</span>
                                        <span> <i className="fal fa-calendar-alt"></i> 05 Aug 2019</span>
                                        <span> <i className="far fa-comments"></i> (03)</span>
                                    </div>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="/blog-deatils">
                                                <a>Exploring Latest Web Design Together With Theme</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                        <Link href="/blog-deatils">
                                            <a><span className="blog-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- blog-area-end --> */}
            </React.Fragment>
        );
    }
}

export default AmountMain;