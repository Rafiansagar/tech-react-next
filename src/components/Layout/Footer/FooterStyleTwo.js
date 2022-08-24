import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterStyleTwo = () => {

    return (
        <footer>
            <div className="footer-area pt-80" style={{ backgroundImage: `url(${'assets/img/bg/bg-7.jpg'})` }} >
                <div className="container">
                    <div className="newsletter-bg pb-50 mb-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 mb-30">
                                <div className="single-newsletter ">
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input placeholder="Enter Your Email :" type="email" />
                                            <button className="btn" type="submit"><span className="btn-text">subscribe <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> <span className="btn-border"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 mb-30">
                                <div className="footer-2-icon text-lg-right">
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/white.png" alt="" />
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sitluptatem accusantium doloremque laudantium totam rem apereaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
									<li><a href="#">User Strategy </a></li>
									<li><a href="#">Product Designing </a></li>
									<li><a href="#">Marketing Strategy</a></li>
									<li><a href="#">IT Consultancy</a></li>
									<li><a href="#">Server Security</a></li>
									<li><a href="#">Product Marketing</a></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30 pl-50">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
									<li><a href="#">About Us</a></li>
									<li><a href="#">Need a Consultant?</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">Have Any Questions?</a></li>
									<li><a href="#">Meet Our Team</a></li>
									<li><a href="#">Contact Us</a></li>
								</ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper footer-2-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>But I must explain to you
                                        how all this mistaken</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+812  (345) 778 88</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>support@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>227 Marion Street, Columbia</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area footer-2-bottom mt-50 pb-24 pt-24">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="copyright">
                                    <p><i className="far fa-copyright"></i> Copyright 2021 <a href="#">Braintech</a>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-bottem-text text-md-right">
                                    <p>Design By <a href="#">Reacthemes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterStyleTwo;