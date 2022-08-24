import React, { Component, useState } from 'react';
import Link from 'next/link';


import bannerImg from '../../../public/assets/img/banner/style4/image.png';
import shape1 from '../../../public/assets/img/banner/style4/circle-1.png';
import shape2 from '../../../public/assets/img/banner/style4/circle-2.png';
import shape3 from '../../../public/assets/img/banner/style4/circle-3.png';
import shape4 from '../../../public/assets/img/banner/style4/shape-1.png';
import shape5 from '../../../public/assets/img/banner/style4/shape-2.png';

const BannerHomeThirteen = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style9" style={{ 'background-image': 'url(assets/img/bg/banner-12.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <span className="sub-text">Branding Agency</span>
                                <h1 className="title">The Unifying Power of Branding</h1>
                                <p className="desc">
                                    We Are Modern Creative Agency, We Create Your Drem & Creating Consistency in Professional Services Branding
                                </p>
                                <div className="btn-part">
                                    <Link href="/about">
                                        <a className="readon more-about">More About</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images-part">
                                <img
                                    src={bannerImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-animation">
                    <div className="bnr-animate one">
                        <img className="rotated-style" src={shape1} alt="" />
                    </div>
                    <div className="bnr-animate two">
                        <img className="vertical" src={shape2} alt="" />
                    </div>
                    <div className="bnr-animate three">
                        <img className="horizontal" src={shape3} alt="" />
                    </div>
                    <div className="bnr-animate four">
                        <img className="vertical" src={shape4} alt="" />
                    </div>
                    <div className="bnr-animate five">
                        <img className="horizontal new-style" src={shape5} alt="" />
                    </div>
                    <div className="bnr-animate six">
                        <img className="horizontal" src={shape5} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeThirteen;