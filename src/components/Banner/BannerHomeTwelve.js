import React from 'react';
import Link from 'next/link';

const BannerHomeTwelve = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style8" style={{ 'background-image': 'url(assets/img/bg/home-12.jpg)' }}>
                <div className="container">
                    <div className="banner-content text-center">
                        <span className="sub-title">Welcome to Braintech</span>
                        <h1 className="title">We Are Award Winning<span> Web Design </span>Agency
                        </h1>
                        <ul className="banner-btn">
                            <li>
                                <Link href="/contact">
                                    <a className="readon started get-ready3">Get Started</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className="readon qoute-btn active">Discover More</a>
                                </Link>
                            </li>                                
                        </ul>
                        <div className="arrow-btn hidden-sm">
                            <a href="#rs-service">
                                <span className="up-down"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeTwelve;