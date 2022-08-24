import React, { Component } from 'react';
import BannerHomeNine from '../../components/Banner/BannerHomeNine';
import About from './AboutSection';
import Testimonial from './TestimonialSection';
import Service from './ServiceSection';
import Project from './ProjectSection';
import Counter from './CounterSection';
import Blog from './BlogSection';
import CTA from './CTASection'
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeNineMain extends Component {

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

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</React.Fragment>
		);
	}
}

export default HomeNineMain;