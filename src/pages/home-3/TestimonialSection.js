import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial2 from '../../components/Testimonial/SingleTestimonial2';


import quote from '../../../public/assets/img/testimonial/quote-white.png';
import author1 from '../../../public/assets/img/testimonial/1.jpg';
import author2 from '../../../public/assets/img/testimonial/2.jpg';
import author3 from '../../../public/assets/img/testimonial/3.jpg';
import author4 from '../../../public/assets/img/testimonial/4.jpg';
import author5 from '../../../public/assets/img/testimonial/5.jpg';

function Testimonial() {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                dots: false,
            },
            768: {
                items: 1,
                stagePadding: 0,
                dots: true,

            },
            992: {
                items: 2,
                stagePadding: 0,

            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial style3 pt-120 pb-114 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text style-bg"
                        subtitle="Testimonial"
                        titleClass="title title2"
                        title="What Saying Our Customers"
                    />
                    <OwlCarousel options={options} >
                        <SingleTestimonial2 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner" 
                            Designation="Web Developer" 
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial2 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc" 
                            Designation="App Developer" 
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial2 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith" 
                            Designation="Web Designer" 
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial2 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author4}
                            Title="Bret Lee" 
                            Designation="Client Manager" 
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial2 
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
        </React.Fragment>
	)
}

export default Testimonial