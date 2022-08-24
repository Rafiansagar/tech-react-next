import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Client = () => {

    const settings = {
        className: "client-active",
        dots: false,
        nav: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="client-area dark pt-120 pb-100 grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title  mb-70">
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">our testimonials</span>
                            <h1>More Than 800+ Customer Satisfied Our Solutions</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            <div className="client-item col">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src="assets/img/testimonial/01.png" alt="" />
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-item col">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src="assets/img/testimonial/02.png" alt="" />
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Jeson Roy Newzi</h4>
                                                <span>SR Consultant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-item col">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src="assets/img/testimonial/03.png" alt="" />
                                            </div>
                                            <div className="client-say-content">
                                                <h4>David Mexxwell</h4>
                                                <span>Business manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-item col">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src="assets/img/testimonial/01.png" alt="" />
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-item col">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src="assets/img/testimonial/01.png" alt="" />
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;