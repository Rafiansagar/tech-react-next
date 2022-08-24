import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

const BrandTwo = () =>  {

    const options = {
        items: 3,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        margin: 0,
        loop: true,
        center: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            480: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 3,
                stagePadding: 0,
            },
            992: {
                items: 3,
                stagePadding: 0,
            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <div className="rs-partner style2 modify1">
            <p className="title">Trusted By 5000+ Worldwide Customers:</p>
            <OwlCarousel options={options} >
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/1.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/2.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/3.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/4.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/5.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <a href="#">
                            <img src="../../assets/img/brand/style2/6.png" alt="" />
                        </a>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}

export default BrandTwo;