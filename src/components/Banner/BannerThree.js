import React, { Component, useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bannerimg from '../../../public/assets/img/banner/banner-3.png';

const BannerThree = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style3 pt-330 pb-330">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <div className="sub-title">Secure & Clean Code</div>
                                <h1 className="title">We Manage Your All In All Digital Services</h1>
                                <p className="desc">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                <ul className="banner-btn">
                                    <li>
                                        <Link href="/about">
                                            <a className="readon started">Get Started</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="video-icon">
                                            <a className="animate-border white-color" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="d-none d-lg-block images-part"
                    src={bannerimg}
                    alt="Banner Floating Image"
                />
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerThree;