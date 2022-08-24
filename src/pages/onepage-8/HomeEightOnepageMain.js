import React, { Component } from 'react';
import Blog from '../home-8/BlogSection';
import About from '../home-8/AboutSection';
import Service from '../home-8/ServiceSection';
import Process from '../home-8/ProcessSection';
import Pricing from '../home-8/PricingSection';
import WhyChooseUs from '../home-8/WhyChooseUsSection';
import Testimonial from '../home-8/TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import SliderStyleThree from '../../components/Elements/Slider/SliderStyleThree';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeEightOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* Slider-start */}
				<SliderStyleThree />
				{/* Slider-start */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* WhyChooseUs-area-start */}
				<WhyChooseUs />
				{/* WhyChooseUs-area-end */}

				{/* Process-area-start */}
				<Process />
				{/* Process-area-end */}

				{/* Pricing-start */}
				<Pricing />
				{/* Pricing-end */}

				{/* Testimonial-start */}
				<Testimonial />
				{/* Testimonial-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
				/>
				{/* Contact-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop />
	            {/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeEightOnepageMain;