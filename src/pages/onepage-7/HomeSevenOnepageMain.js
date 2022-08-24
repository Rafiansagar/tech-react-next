import React, { Component } from 'react';
import CTA from '../home-7/CtaSection'; 
import Team from '../home-7/TeamSection';
import Blog from '../home-7/BlogSection';
import About from '../home-7/AboutSection';
import Process from '../home-7/ProcessSection';
import Project from '../home-7/ProjectSection';
import Pricing from '../home-7/PricingSection';
import Service from '../home-7/ServiceSection';
import ServiceTwo from '../home-7/ServiceSectionTwo';
import Technology from '../home-7/TechnologySection';
import Testimonial from '../home-7/TestimonialSection';
import ProgressBar from '../home-7/ProgressBarSection';
import Brand from '../../components/Common/Brand';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeSeven from '../../components/Banner/BannerHomeSeven';
import OnepageContactPart from '../../components/Contact/OnepageContact';


class HomeSevenOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* banner-start */}
				<BannerHomeSeven />
				{/* banner-start */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* ProgressBar-start */}
				<ProgressBar />
				{/* ProgressBar-end */}

				{/* Service-area-start */}
				<ServiceTwo />
				{/* Service-area-end */}

				{/* CTA-start */}
				<CTA />
				{/* CTA-end */}

				{/* Process-start */}
				<Process />
				{/* Process-end */}

				{/* Project-start */}
				<Project />
				{/* Project-end */}

				{/* Team-start */}
				<Team />
				{/* Team-end */}

				{/* Testimonial-start */}
				<Testimonial />
				{/* Testimonial-end */}

				{/* Pricing-start */}
				<Pricing />
				{/* Pricing-end */}

				{/* Technology-start */}
				<Technology />
				{/* Technology-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

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

export default HomeSevenOnepageMain;