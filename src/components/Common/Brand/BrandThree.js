import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

const BrandThree = (props) =>  {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage:`url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

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
            480: {
                items: 2,
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
        <div className={ brandClass ? brandClass : 'rs-partner style2 pt-120 md-pt-80'}  style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
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
        </div>
    );
}

export default BrandThree;