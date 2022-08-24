import React from 'react';
import Head from 'next/head';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselDefault from '../Elements/OwlCarousel/CarouselDefault';

const CaseSettings = {
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
                <Head>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                </Head>
                <div>
                    {/* <!-- project-area-start --> */}
                    <div className="project-area pt-130 pb-185  pl-140 pr-140">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <CarouselDefault />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-area-end --> */}

                    {/* <!-- our-case-area-start --> */}
                    <div className="our-case-area pt-120  pr-55 pl-55 pb-220" style={{ 'background-image': 'url(assets/img/bg/case.jpg)' }}>
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
                                    <Slider {...CaseSettings}>
                                        <div className="col">
                                            <div className="our-case-wrapper">
                                                <div className="our-case-img">
                                                    <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                                </div>
                                                <div className="our-case-text">
                                                    <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                                    <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
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
                                                    <a href="#"> <span className="cases-button">learn more <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- our-case-area-end --> */}
                </div>
            </React.Fragment>
        );
    }
}

export default CaseTwo;