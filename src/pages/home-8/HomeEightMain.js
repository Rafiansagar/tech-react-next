import React, { Component } from 'react';
import SliderStyleThree from '../../components/Elements/Slider/SliderStyleThree';
import Service from './ServiceSection';
import About from './AboutSection';
import WhyChooseUs from './WhyChooseUsSection';
import Process from './ProcessSection';
import Testimonial from './TestimonialSection';
import Pricing from './PricingSection';
import Blog from './BlogSection';
import Brand from '../../components/Common/Brand'
import ScrollToTop from '../../components/Common/ScrollTop';

import brandBg1 from '../../../public/assets/img/bg/partners-bg.jpg';

class HomeEightMain extends Component {

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

				{/* brand-area-start */}
				<Brand
					brandBg={brandBg1}
				/>
				{/* brand-area-end */}

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</React.Fragment>
		);
	}
}

export default HomeEightMain;