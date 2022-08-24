import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitleTwo';
import SingleTestimonial5 from '../../components/Testimonial/SingleTestimonial5';

// Testimonial Images
import quote from '../../../public/assets/img/testimonial/quote11.png';
import rating from '../../../public/assets/img/testimonial/rating.png';

// Testimonial Avatars
import author1 from '../../../public/assets/img/testimonial/1.jpg';
import author2 from '../../../public/assets/img/testimonial/2.jpg';
import author3 from '../../../public/assets/img/testimonial/3.jpg';
import author4 from '../../../public/assets/img/testimonial/4.jpg';
import author5 from '../../../public/assets/img/testimonial/5.jpg';

function Testimonial() {
    const options = {
        items: 4,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                dots: false,
            },
            768: {
                items: 2,
                stagePadding: 0,
                dots: false,
            },
            992: {
                items: 2,
                stagePadding: 0,
                dots: false,
            },
            1200: {
                items: 3,
                stagePadding: 0,
                dots: true,
            },
            1500: {
                items: 4,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div id="rs-team" className="rs-testimonial style6 gray-bg pt-100 pb-100 md-pt-80 md-pb-80 md-pl-14 md-pr-14">
                <SectionTitle 
                    title={<>Clients <span>Testimonials</span></>}
                    description="We've been building creative tools together for over a decade and have a deep appreciation for software applications and AI tools."
                />
                <OwlCarousel options={options} >
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author1}
                        Title="David Warner"
                        Designation="Web Developer"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author2}
                        Title="Mitchel Starc"
                        Designation="App Developer"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author3}
                        Title="Steve Smith"
                        Designation="Web Designer"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author4}
                        Title="Bret Lee"
                        Designation="Client Manager"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author5}
                        Title="Shan Warne"
                        Designation="Digital Marketar"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author2}
                        Title="Mitchel Starc"
                        Designation="App Developer"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author5}
                        Title="Shan Warne"
                        Designation="Digital Marketar"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                    <SingleTestimonial5
                        itemClass="testi-item"
                        ratingImage={rating}
                        quoteImage={quote}
                        authorImage={author4}
                        Title="Bret Lee"
                        Designation="Client Manager"
                        Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                    />
                </OwlCarousel>
            </div>
        </React.Fragment>
	)
}

export default Testimonial