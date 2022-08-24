import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial3 from '../../components/Testimonial/SingleTestimonial3';

// Testimonial Images
import testiMainimg from '../../../public/assets/img/testimonial/testimonial-2.png';
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
        nav: false,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
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

            },
            992: {
                items: 1,
                stagePadding: 0,

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
            <div className="rs-testimonial main-home rs-rain-animate style4 sec-bg modify1 md-fixing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 md-pb-40">
                            <img
                                src={testiMainimg}
                                alt="Left Big Image"
                            />
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title mb-50"
                                subtitleClass="sub-text style4-bg left testi"
                                subtitle="Testimonials"
                                titleClass="title pb-20"
                                title="What Customer Saying"
                                descClass="desc"
                                description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                            />
                            <OwlCarousel options={options} >
                                <SingleTestimonial3
                                    itemClass="testi-item"
                                    quoteImage={quote}
                                    authorImage={author1}
                                    Title="David Warner"
                                    Designation="Web Developer"
                                    Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                />
                                <SingleTestimonial3
                                    itemClass="testi-item"
                                    quoteImage={quote}
                                    authorImage={author2}
                                    Title="Mitchel Starc"
                                    Designation="App Developer"
                                    Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                />
                                <SingleTestimonial3
                                    itemClass="testi-item"
                                    quoteImage={quote}
                                    authorImage={author3}
                                    Title="Steve Smith"
                                    Designation="Web Designer"
                                    Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                />
                                <SingleTestimonial3
                                    itemClass="testi-item"
                                    quoteImage={quote}
                                    authorImage={author4}
                                    Title="Bret Lee"
                                    Designation="Client Manager"
                                    Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                                />
                                <SingleTestimonial3
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
                <div className="line-inner">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial