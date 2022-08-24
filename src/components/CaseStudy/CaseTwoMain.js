import React, { Component } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const settings = {
    className: "case-active",
    dots: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
};

class CaseTwo extends Component {

    render() {

        return (
            <React.Fragment>
                {/* <!-- case-studies-start --> */}
                <div className="case-studies pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-75">
                                    <span className="border-left-1"></span>
                                    <span>case studies</span>
                                    <span className="border-right-1"></span>
                                    <h1>Our Recent Case Studies</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-01.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                    <div className="case-studies-content text-center">
                                        <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-02.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                    <div className="case-studies-content text-center">
                                        <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-03.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                    <div className="case-studies-content text-center">
                                        <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- case-studies-end --> */}

                {/* <!-- our-case-area-start --> */}
                    <div className="our-case-area pt-120  pr-55 pl-55 pb-220" style={{ 'background-image': 'url(assets/img/bg/case.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title section-title-white text-center ml-50 mr-50 mb-80">
                                    <span className="border-left-1"></span>
                                    <span>our project</span>
                                    <span className="border-right-1"></span>
                                    <h1>Our Latest Case Studies</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings}>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="our-case-wrapper">
                                            <div className="our-case-img">
                                                <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                            </div>
                                            <div className="our-case-text">
                                                <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                                <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- our-case-area-end --> */}

                {/* <!-- case-area-start --> */}
                <div className="case-area pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-80">
                                    <span className="border-left-1"></span>
                                    <span>our project</span>
                                    <span className="border-right-1"></span>
                                    <h1>Our Latest Case Studies</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-2.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-4.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-5.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-wrapper mb-30">
                                    <div className="case-img">
                                        <a href="#"><img src="assets/img/project/case-6.jpg" alt="" /></a>
                                    </div>
                                    <div className="case-text">
                                        <span>Idea generator</span>
                                        <h3><a href="#">Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- case-area-end --> */}

                {/* <!-- cta-area-start --> */}
                <div className="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="cta-text mb-30">
                                    <span>do you have any project ?</span>
                                    <h1>Let’s Talk About Business Soluations With Us</h1>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-button text-lg-right mb-30">
                                    <a className="btn btn-white btn-none" href="#"><span className="btn-text">contact us <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                    <a className="btn btn-white btn-none btn-margin" href="#"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- cta-area-end --> */}
            </React.Fragment>
        );
    }
}

export default CaseTwo;