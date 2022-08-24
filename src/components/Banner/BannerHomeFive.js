import React, { Component, useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bannerImg from '../../../public/assets/img/banner/banner-4.png';

const BannerHomeFive = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style3 rs-rain-animate modify1">                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 pt-40 pr-140 sm-pr-14"> 
                            <div className="banner-content">
                                <div className="rs-videos">
                                    <div className="animate-border white-color style3">
                                        <a className="popup-border popup-videos" onClick={() => { openModal(); }}>
                                            <i><FontAwesomeIcon icon={['fas', 'play']} /></i>
                                        </a>
                                    </div>
                                </div>
                                <h2 className="title" data-animation="fadeInLeft" data-delay=".3s">We Are Digital Agency &amp; Technology Solution</h2>
                                <p className="desc" data-animation="fadeInLeft" data-delay=".5s">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                <ul className="banner-btn">
                                    <li>
                                        <Link href="/about">
                                            <a className="readon started">Get Started</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>                            
                    </div>
                    <div className="images-part hidden-md">
                        <img
                            src={bannerImg}
                            alt="Banner Floating Image"
                        />
                    </div>
                    <div className="line-inner style2">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerHomeFive;