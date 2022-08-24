import React, { Component } from 'react';
import Service from './ServiceSection';
import BannerThree from '../../components/Banner/BannerThree';
import About from './AboutSection';
import Process from './ProcessSection';
import Chooseus from './ChooseusSection';
import Project from './ProjectSection';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Brand from '../../components/Common/Brand'
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeFourMain extends Component {

    render() {

        return (
            <React.Fragment>
	            {/* banner-start */}
				<BannerThree />
				{/* banner-start */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Process-area-start */}
				<Process />
				{/* Process-area-end */}
				
				{/* Chooseus-area-start */}
				<Chooseus />
				{/* Chooseus-area-end */}

				{/* project-area-start */}
				<Project />
				{/* project-area-end */}

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

export default HomeFourMain;