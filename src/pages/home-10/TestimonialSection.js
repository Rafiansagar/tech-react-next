import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import BrandThree from '../../components/Common/Brand/BrandThree'
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial6 from '../../components/Testimonial/SingleTestimonial6';


// Testimonial Avatars
import author1 from '../../../public/assets/img/testimonial/1.jpg';
import author2 from '../../../public/assets/img/testimonial/2.jpg';
import author3 from '../../../public/assets/img/testimonial/3.jpg';

function Testimonial() {
    const options = {
        items: 1,
        nav: true,
        dots: false,
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
            <div className="rs-testimonial style7 pt-100 pb-80 md-pt-74"  style={{'background-image': 'url(../img/bg/testimonial-bg.png)'}}>                
                <div className="container">
                    <SectionTitle 
                        sectionClass="sec-title2 text-center mb-20"
                        subtitleClass="sub-text gold-color"
                        subtitle="Client Reviews"
                        titleClass="title title7"
                        title="What Saying Our Customers"
                    />
                    <div className="testi-main">
                        <OwlCarousel options={options} >
                            <SingleTestimonial6
                                itemClass="testi-item"
                                authorImage={author1}
                                Title="David Warner"
                                Designation="Web Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial6
                                itemClass="testi-item"
                                authorImage={author2}
                                Title="David Warner"
                                Designation="Web Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial6
                                itemClass="testi-item"
                                authorImage={author3}
                                Title="David Warner"
                                Designation="Web Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                        </OwlCarousel>
                    </div>
                </div>
                <BrandThree 
                    brandClass='rs-partner style4 pt-70'
                />
            </div>
        </React.Fragment>
	)
}

export default Testimonial