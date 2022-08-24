import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

const CarouselStyleTwo = () => {

    const navPrevIcon = () => ('<button>prev1</button>');
    const navNextIcon = () => (<button onclick={next}>next1</button>);
    
    const options = {
        items: 1,
        nav: true,
        dots: true,
        rewind: false,
        autoplay: false,
        stagePadding: 380,
        loop: true,
        center: true
    };

    const navNext = () => (<button onClick={() => this.next()}>prev 2</button>);

    return (
        <React.Fragment>
            <OwlCarousel options={options} next={navNext} >
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
export default CarouselStyleTwo;