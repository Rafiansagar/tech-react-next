import React, { Component, useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BannerHomeSeven = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style4">                
                <div className="container">
                    <div className="banner-content">
                        <span className="sub-title">Technology &amp; It Solutions </span>
                       <h1 className="title">Excellent IT services for your success</h1>
                        <p className="desc">
                            We are Leading Technology Solutions Providing Company all over the world doing over 40 years.
                        </p>
                        <ul className="banner-btn">
                            <li>
                                <Link href="/about">
                                    <a className="readon discover">Discover More</a>
                                </Link>
                            </li>
                            <li>
                                <div className="rs-videos">
                                    <div className="animate-border white-color">
                                        <a className="popup-border popup-videos" onClick={() => { openModal(); }}>
                                            <i><FontAwesomeIcon icon={['fas', 'play']} /></i>
                                        </a>
                                    </div>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerHomeSeven;