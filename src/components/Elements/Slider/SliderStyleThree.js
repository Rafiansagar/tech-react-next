import React from 'react';
import Link from 'next/link';
import OwlCarousel from 'react-owl-carousel2';

const SliderStyleThree = () =>  {
    const navPrevIcon = () => ("<i class='fa fa-angle-left'></i>");
    const navNextIcon = () => ("<i class='fa fa-angle-right'></i>");

    const options = {
        items: 1,
        nav: true,
        dots: false,
        margin: 0,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        loop: true,
        center: false,
        navText: [navPrevIcon,navNextIcon],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
        }
    };

    return (
        <React.Fragment>
            <div className="rs-slider style2">
                <OwlCarousel options={options} >
                    <div className="slider-content slide1">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-img">
                                    <img src="assets/img/slider/style2/house-repair.png" alt="slider" />
                                </div>
                                <h1 className="sl-title">We specialize in </h1>
                                <h1 className="sl-title2 mb-mb-10">Repair Gadgates</h1>
                                <div className="sl-desc">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud. 
                                </div>
                                <div className="sl-btn">
                                    <Link href="/about">
                                        <a className="readon buy-now sl-btn">Get Started Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="slider-content slide2">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-img">
                                    <img src="assets/img/slider/style2/house-repair.png" alt="slider" />
                                </div>
                                <h1 className="sl-title">We specialize in </h1>
                                <h1 className="sl-title2 mb-mb-10">Repair Gadgates</h1>
                                <div className="sl-desc">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud. 
                                </div>
                                <div className="sl-btn">
                                    <Link href="/about">
                                        <a className="readon buy-now sl-btn">Get Started Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </React.Fragment>
    );
}

export default SliderStyleThree;