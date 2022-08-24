import React, { Component } from 'react'; 
import BannerHomeSeven from '../../components/Banner/BannerHomeSeven';
import About from './AboutSection';
import Blog from './BlogSection';
import Brand from '../../components/Common/Brand'
import CTA from './CtaSection';
import Process from './ProcessSection';
import Project from './ProjectSection';
import ProgressBar from './ProgressBarSection';
import Pricing from './PricingSection';
import Service from './ServiceSection';
import ServiceTwo from './ServiceSectionTwo';
import ScrollToTop from '../../components/Common/ScrollTop';
import Team from './TeamSection';
import Testimonial from './TestimonialSection';
import Technology from './TechnologySection';

class HomeSevenMain extends Component {

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

export default HomeSevenMain;