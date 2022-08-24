import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitle';

// Testimonial Avatars
import aboutImg1 from '../../../public/assets/img/about/brand-visual.png';

function AboutSlider() {
    const options = {
        items: 1,
        nav: true,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                nav: true,
            },
            992: {
                items: 1,
                nav: true,
            },
        }
    };

    return (
        <React.Fragment>
            <div className="rs-slider style3 pt-120 pb-214 md-pt-80 md-pb-80" style={{ 'background': '#f7f9ff' }}>
                <div className="container">
                    <OwlCarousel options={options} >
                        <div className='single-slider'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 md-mb-50'>
                                    <div className="image-part">
                                        <img
                                            src={aboutImg1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-7 pl-50 md-pl-14'>
                                    <div className='slider-content'>
                                        <SectionTitle
                                            sectionClass="sec-title5 mb-20"
                                            titleClass="title title2 pb-16"
                                            title="Brand Positioning"
                                            descClass="desc2"
                                            description="Consistency in visual identity is key to brand retention. We will develop a brand style guide that will document and ensure a coherent use of your brand’s visual assets.Perspiciatis unde omnis iste natus error sit voluptatem accus antium dolo remque."
                                        />
                                        <ul className="check-square">
                                            <li>Creating A Brand Strategy</li>
                                            <li>Determine A Brand’s Strengths &amp; Weaknesses</li>
                                            <li>How Do Other Companies Compare?</li>
                                            <li>The Who, What, Where, When, Why &amp; How’s</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='single-slider'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 md-mb-50'>
                                    <div className="image-part">
                                        <img
                                            src={aboutImg1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-7 pl-50 md-pl-14'>
                                    <div className='slider-content'>
                                        <SectionTitle
                                            sectionClass="sec-title5 mb-20"
                                            titleClass="title title2 pb-16"
                                            title="Brand Messaging"
                                            descClass="desc2"
                                            description="Consistency in visual identity is key to brand retention. We will develop a brand style guide that will document and ensure a coherent use of your brand’s visual assets.Perspiciatis unde omnis iste natus error sit voluptatem accus antium dolo remque."
                                        />
                                        <ul className="check-square">
                                            <li>Creating A Brand Strategy</li>
                                            <li>Determine A Brand’s Strengths &amp; Weaknesses</li>
                                            <li>How Do Other Companies Compare?</li>
                                            <li>The Who, What, Where, When, Why &amp; How’s</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='single-slider'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 md-mb-50'>
                                    <div className="image-part">
                                        <img
                                            src={aboutImg1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-7 pl-50 md-pl-14'>
                                    <div className='slider-content'>
                                        <SectionTitle
                                            sectionClass="sec-title5 mb-20"
                                            titleClass="title title2 pb-16"
                                            title="Brand Visual Identity"
                                            descClass="desc2"
                                            description="Consistency in visual identity is key to brand retention. We will develop a brand style guide that will document and ensure a coherent use of your brand’s visual assets.Perspiciatis unde omnis iste natus error sit voluptatem accus antium dolo remque."
                                        />
                                        <ul className="check-square">
                                            <li>Creating A Brand Strategy</li>
                                            <li>Determine A Brand’s Strengths &amp; Weaknesses</li>
                                            <li>How Do Other Companies Compare?</li>
                                            <li>The Who, What, Where, When, Why &amp; How’s</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='single-slider'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 md-mb-50'>
                                    <div className="image-part">
                                        <img
                                            src={aboutImg1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-7 pl-50 md-pl-14'>
                                    <div className='slider-content'>
                                        <SectionTitle
                                            sectionClass="sec-title5 mb-20"
                                            titleClass="title title2 pb-16"
                                            title="Brand Audience"
                                            descClass="desc2"
                                            description="Consistency in visual identity is key to brand retention. We will develop a brand style guide that will document and ensure a coherent use of your brand’s visual assets.Perspiciatis unde omnis iste natus error sit voluptatem accus antium dolo remque."
                                        />
                                        <ul className="check-square">
                                            <li>Creating A Brand Strategy</li>
                                            <li>Determine A Brand’s Strengths &amp; Weaknesses</li>
                                            <li>How Do Other Companies Compare?</li>
                                            <li>The Who, What, Where, When, Why &amp; How’s</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutSlider