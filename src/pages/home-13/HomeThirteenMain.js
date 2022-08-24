import React, { Component } from 'react';
import BannerHomeThirteen from '../../components/Banner/BannerHomeThirteen';
import About from './AboutSection';
import AboutSlider from './AboutSliderSection';
import Testimonial from './TestimonialSection';
import Service from './ServiceSection';
import ServiceTwo from './ServiceSectionTwo';
import Brand from './BrandSection';
import Project from './ProjectSection';
import Counter from './CounterSection';
import CTA from './CTASection';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeThirteenMain extends Component {

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

	            {/* scrolltop-start */}
				<ScrollToTop 
					scrollClassName="scrollup purple-color"
				/>
	       		{/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeThirteenMain;