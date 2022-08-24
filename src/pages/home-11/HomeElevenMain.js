import React, { Component } from 'react';
import BannerHomeEleven from '../../components/Banner/BannerHomeEleven';
import Service from './ServiceSection';
import About from './AboutSection';
import AboutTwo from './AboutSectionTwo';
import WhyChooseUs from './WhyChooseUsSection';
import WhyChooseUs2 from './WhyChooseUsSection2';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Brand from '../../components/Common/Brand';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeElevenMain extends Component {
	
    render() {
        return (
            <React.Fragment>
	            {/* banner-start */}
				<BannerHomeEleven />
				{/* banner-start */}

				{/* brand-area-start */}
				<Brand 
					brandClass="rs-partner black-dark pt-50 pb-50"
				/>
	            {/* brand-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* About-area-start */}
				<AboutTwo />
				{/* About-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* WhyChooseUs-area-start */}
				<WhyChooseUs />
				{/* WhyChooseUs-area-end */}

				{/* WhyChooseUs-area-start */}
				<WhyChooseUs2 />
				{/* WhyChooseUs-area-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* brand-area-start */}
				<Brand 
					brandClass="rs-partner style5 pt-70 pb-70"
				/>
	            {/* brand-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop />
	       		{/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeElevenMain;