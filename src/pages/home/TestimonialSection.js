import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';


import quote from '../../../public/assets/img/testimonial/quote.png';
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
                items: 2,
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
            <div className="rs-testimonial main-home gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text"
                        subtitle="Testimonial"
                        titleClass="title testi-title"
                        title=" What Saying Our Customers"
                        effectClass="heading-line"
                    />
                    <OwlCarousel options={options} >
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner" 
                            Designation="Web Developer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc" 
                            Designation="App Developer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith" 
                            Designation="Web Designer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author4}
                            Title="Bret Lee" 
                            Designation="Client Manager" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author5}
                            Title="Shan Warne" 
                            Designation="Digital Marketar" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial