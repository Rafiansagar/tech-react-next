import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial4 from '../../components/Testimonial/SingleTestimonial4';

// Testimonial Images
import quote from '../../../public/assets/img/testimonial/quote.png';

// Testimonial Avatars
import author1 from '../../../public/assets/img/testimonial/1.jpg';
import author2 from '../../../public/assets/img/testimonial/2.jpg';
import author3 from '../../../public/assets/img/testimonial/3.jpg';
import author4 from '../../../public/assets/img/testimonial/4.jpg';
import author5 from '../../../public/assets/img/testimonial/5.jpg';

function Testimonial() {

    const options = {
        items: 3,
        nav: true,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: true,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                stagePadding: 0,
                nav: false,
            },
            992: {
                items: 1,
                stagePadding: 0,
                nav: true,
            },
            1200: {
                items: 1,
                stagePadding: 0,
            },
            1500: {
                items: 1,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial">
                <div className="container">
                    <div className="testi-effects-layer" style={{'background-image': 'url(assets/img/bg/testi-home7.jpg)'}}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <SectionTitle
                                    sectionClass="sec-title mb-60 md-mb-30"
                                    subtitleClass="sub-text new"
                                    subtitle="Client's Review"
                                    titleClass="title title4 white-color pb-20"
                                    title="What do people praise about braintech?"
                                />
                            </div>
                            <div className="col-lg-7">
                                <div className="rs-testimonial style4">
                                    <OwlCarousel options={options} >
                                        <SingleTestimonial4
                                            itemClass="testi-item"
                                            quoteImage={quote}
                                            authorImage={author1}
                                            Title="David Warner"
                                            Designation="Web Developer"
                                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                        />
                                        <SingleTestimonial4
                                            itemClass="testi-item"
                                            quoteImage={quote}
                                            authorImage={author2}
                                            Title="Mitchel Starc"
                                            Designation="App Developer"
                                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                        />
                                        <SingleTestimonial4
                                            itemClass="testi-item"
                                            quoteImage={quote}
                                            authorImage={author3}
                                            Title="Steve Smith"
                                            Designation="Web Designer"
                                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                        />
                                        <SingleTestimonial4
                                            itemClass="testi-item"
                                            quoteImage={quote}
                                            authorImage={author4}
                                            Title="Bret Lee"
                                            Designation="Client Manager"
                                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                        />
                                        <SingleTestimonial4
                                            itemClass="testi-item"
                                            quoteImage={quote}
                                            authorImage={author5}
                                            Title="Shan Warne"
                                            Designation="Digital Marketar"
                                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                        />
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial