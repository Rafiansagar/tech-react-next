import React, { Component } from 'react';
import About from '../home-9/AboutSection';
import Testimonial from '../home-9/TestimonialSection';
import Service from '../home-9/ServiceSection';
import Project from '../home-9/ProjectSection';
import Counter from '../home-9/CounterSection';
import Blog from '../home-9/BlogSection';
import CTA from '../home-9/CTASection'
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeNine from '../../components/Banner/BannerHomeNine';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeNineOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* Slider-start */}
				<BannerHomeNine />
				{/* Slider-start */}

				{/* Service-start */}
				<Service />
				{/* Service-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Counter-start */}
				<Counter />
				{/* Counter-end */}

				{/* Project-start */}
				<Project />
				{/* Project-end */}

				{/* Testimonial-start */}
				<Testimonial />
				{/* Testimonial-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* CTA-area-start */}
				<CTA />
	            {/* CTA-area-end */}

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

export default HomeNineOnepageMain;