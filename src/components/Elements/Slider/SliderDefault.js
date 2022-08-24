import React, { Component, useState } from 'react';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import AppointmentForm from '../../Appointment/Appointment';

const SliderDefault = () =>  { 

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></button>
        );
    } 

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']}/></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <div className="slider-area">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slider-height pt-100 pb-100" style={{ backgroundImage:`url(${'assets/img/slider/slider-1.jpg'})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 pt-40 pr-140"> 
                                    <div className="slider-content">
                                        <h2 className="sl-title">IT Consulting Services<br></br> For Your Business</h2>
                                        <p  className="sl-desc">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                        <div className="slider-video">
                                            <a className="popup-video" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 pl-70">
                                    <AppointmentForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderDefault;