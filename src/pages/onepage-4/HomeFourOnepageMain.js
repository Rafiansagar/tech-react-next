import React, { Component } from 'react';
import Team from '../home-4/TeamSection';
import Blog from '../home-4/BlogSection';
import About from '../home-4/AboutSection';
import Service from '../home-4/ServiceSection';
import Process from '../home-4/ProcessSection';
import Project from '../home-4/ProjectSection';
import Chooseus from '../home-4/ChooseusSection';
import Testimonial from '../home-4/TestimonialSection';
import Brand from '../../components/Common/Brand'
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerThree from '../../components/Banner/BannerThree';
import OnepageContactPart from '../../components/Contact/OnepageContact';


class HomeFourOnepageMain extends Component {

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

				{/* Team-area-start */}
				<Team />
				{/* Team-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
				/>
				{/* Contact-area-end */}

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

export default HomeFourOnepageMain;