import React from 'react';
import OwlCarousel from 'react-owl-carousel2'; 

const CarouselDefault = () => {

    const navPrevIcon = () => ("<span><img src=\"assets/img/svg/long-arrow-left.svg\" with=\"50\"/></span>");
    const navNextIcon = () => ("<span><img src=\"assets/img/svg/long-arrow-right.svg\" /></span>");

    const options = {
        items: 1,
        nav: true,
        dots: true,
        rewind: false,
        autoplay: false,
        stagePadding: 380,
        loop: true,
        center: true,
        navText: [navPrevIcon,navNextIcon],
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                stagePadding: 0,

            },
            992: {
                items: 1,
                stagePadding: 0,

            },
            1200: {
                items: 1,
                stagePadding: 380,
            },
            1500: {
                items: 1,
                stagePadding: 430,
            }
        }
    };

    return (
        <React.Fragment>
            <OwlCarousel options={options} >
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/01.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/02.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/03.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/01.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/02.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/03.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </React.Fragment>

    );
}
export default CarouselDefault;