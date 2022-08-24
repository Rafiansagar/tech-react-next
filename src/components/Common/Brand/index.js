import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';


const Brand = (props) =>  {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage:`url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: '#00005B'
    }

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        margin: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 3,
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
        <div className={ brandClass ? brandClass : 'rs-partner pt-80 pb-70'}  style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
                <OwlCarousel options={options} >
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/1.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/1.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/2.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/2.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/3.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/3.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/4.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/4.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/5.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/5.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="hover-logo" src="../../assets/img/brand/6.png" alt="" />
                                <img className="main-logo" src="../../assets/img/brand/6.png" alt="" />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Brand;