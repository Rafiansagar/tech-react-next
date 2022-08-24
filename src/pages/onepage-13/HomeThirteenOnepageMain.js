import React, { Component } from 'react';
import About from '../home-13/AboutSection';
import AboutSlider from '../home-13/AboutSliderSection';
import Testimonial from '../home-13/TestimonialSection';
import Service from '../home-13/ServiceSection';
import ServiceTwo from '../home-13/ServiceSectionTwo';
import Brand from '../home-13/BrandSection';
import Project from '../home-13/ProjectSection';
import Counter from '../home-13/CounterSection';
import CTA from '../home-13/CTASection';
import Blog from '../home-13/BlogSection';
import Team from '../home-13/TeamSection';

import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeThirteen from '../../components/Banner/BannerHomeThirteen';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeThirteenOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* Slider-start */}
				<BannerHomeThirteen />
				{/* Slider-start */}

				{/* Service-start */}
				<Service />
				{/* Service-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Service-area-start */}
				<ServiceTwo />
				{/* Service-area-end */}

				{/* Brand-start */}
				<Brand />
				{/* Brand-end */}

				{/* About Slider-start */}
				<AboutSlider />
				{/* About Slider-end */}

				{/* Counter-start */}
				<Counter />
				{/* Counter-end */}

				{/* Project-start */}
				<Project />
				{/* Project-end */}

				{/* Testimonial-start */}
				<Testimonial />
				{/* Testimonial-end */}

				{/* CTA-area-start */}
				<CTA />
	            {/* CTA-area-end */}

				{/* Team-area-start */}
				<Team />
	            {/* Team-area-end */}

				{/* Blog-area-start */}
				<Blog />
	            {/* Blog-area-end */}

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
					contactSubTitleClass="sub-title purple-color"
					contactSectionTitleClass="title testi-title"
					contactBoxClass="contact-box purple-box"
					submitBtnClass="readon started submit get-ready4"
				/>
				{/* Contact-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop 
					scrollClassName="scrollup purple-color"
				/>
	       		{/* scrolltop-end */}

        	</React.Fragment>
        );
    }
}

export default HomeThirteenOnepageMain;