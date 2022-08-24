import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeader = () => {

    return (
        <div className="topbar-area hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo-part">
                            <Link href="/" as="/">
                                <a><img src={require("../../../../public/assets/img/logo/logo.png")} alt="Logo" /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-10 text-right">
                        <ul className="rs-contact-info">
                            <li className="contact-part">
                                <i><FontAwesomeIcon icon={['far', 'map-marker-alt']} /></i>
                                <span className="contact-info">
                                    <span>Address</span>
                                    05 kandi BR. New York
                                </span>
                            </li>
                            <li className="contact-part">
                                <i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>
                                <span className="contact-info">
                                    <span>E-mail</span>
                                    <a href="#"> support@website.com</a>
                                </span>
                            </li>
                            <li className="contact-part">                                
                                <i><FontAwesomeIcon icon={['far', 'phone']} /></i>
                                <span className="contact-info">
                                    <span>Phone</span>
                                        +019988772
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;