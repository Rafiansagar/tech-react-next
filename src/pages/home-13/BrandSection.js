import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

const Brand = () =>  {

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: true,
        stagePadding: 0,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1500: {
                items: 5,
            }
        }
    };

    return (
        <div className="rs-partner style4 modify1 pt-80 xs-pt-40 pb-120 md-pb-80 xs-pb-40">
            <div className="container">
                <OwlCarousel options={options} >
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/1.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/1.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/2.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/2.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/3.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/3.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/4.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/4.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/5.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/5.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/style2/6.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/style2/6.png" alt="" />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Brand;