import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitle';
import SingleTestimonial8 from '../../components/Testimonial/SingleTestimonial8';

// Testimonial Images
import rating from '../../../public/assets/img/testimonial/rating.png';

// Testimonial Avatars
import author1 from '../../../public/assets/img/testimonial/1.jpg';
import author2 from '../../../public/assets/img/testimonial/2.jpg';
import author3 from '../../../public/assets/img/testimonial/3.jpg';
import author4 from '../../../public/assets/img/testimonial/4.jpg';
import author5 from '../../../public/assets/img/testimonial/5.jpg';

function Testimonial() {
    const options = {
        items: 2,
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
                items: 1,
                stagePadding: 0,

            },
            992: {
                items: 2,
                stagePadding: 0,

            },
            1200: {
                items: 2,
                stagePadding: 0,
            },
            1500: {
                items: 2,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial style9 pt-120 pb-120 md-pt-80 md-pb-80" style={{'background': '#F5F6FE'}}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50"
                        titleClass="title testi-title"
                        title="What Customer Saying"
                        descClass="desc desc3"
                        description="Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                    />
                    <OwlCarousel options={options} >
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Web Developer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author3}
                            Title="Steve Smith"
                            Designation="Web Designer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author4}
                            Title="Bret Lee"
                            Designation="Client Manager"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author5}
                            Title="Shan Warne"
                            Designation="Digital Marketar"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author5}
                            Title="Shan Warne"
                            Designation="Digital Marketar"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial8
                            itemClass="testi-item"
                            ratingImage={rating}
                            authorImage={author4}
                            Title="Bret Lee"
                            Designation="Client Manager"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial