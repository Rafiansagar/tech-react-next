import React, { Component } from 'react';
import BannerHomeFive from '../../components/Banner/BannerHomeFive';
import Service from './ServiceSection';
import About from './AboutSection';
import AboutTwo from './AboutSectionTwo';
import WhyChooseUs from './WhyChooseUsSection';
import WhyChooseUs2 from './WhyChooseUsSection2';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import BrandHomeFive from './BrandSection';
import Brand from '../../components/Common/Brand'
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeFiveMain extends Component {

    render() {

        return (
            <React.Fragment>
	            {/* banner-start */}
				<BannerHomeFive />
				{/* banner-start */}

				{/* brand-area-start */}
				<BrandHomeFive />
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
				<Brand />
	            {/* brand-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop />
	       		{/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeFiveMain;