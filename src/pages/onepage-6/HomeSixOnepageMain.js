import React, { Component } from 'react';
import ServiceFlip from '../home-6/ServiceSectionFlip';
import Team from '../home-5/TeamSection';
import Blog from '../home-6/BlogSection';
import About from '../home-6/AboutSection';
import Project from '../home-6/ProjectSection';
import Service from '../home-6/ServiceSection';
import ServiceMain from '../home-6/ServiceSectionMain';
import Testimonial from '../home-6/TestimonialSection';
import Brand from '../../components/Common/Brand';
import Technology from '../../components/Technology';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeSix from '../../components/Banner/BannerHomeSix';
import OnepageContactPart from '../../components/Contact/OnepageContact';


class HomeSixOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* banner-start */}
				<BannerHomeSix />
				{/* banner-start */}

				{/* ServiceFlip-area-start */}
				<ServiceFlip />
				{/* ServiceFlip-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* Technology-area-start */}
				<Technology />
				{/* Technology-area-end */}

				{/* ServiceMain-area-start */}
				<ServiceMain />
				{/* ServiceMain-area-end */}

				{/* project-area-start */}
				<Project />
				{/* project-area-end */}

				{/* Team-area-start */}
				<Team />
				{/* Team-area-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

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

export default HomeSixOnepageMain;