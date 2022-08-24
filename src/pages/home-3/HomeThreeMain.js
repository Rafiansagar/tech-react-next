import React, { Component } from 'react';
import BannerTwo from '../../components/Banner/BannerTwo';
import Service from './ServiceSection';
import About from './AboutSection';
import ServiceFlip from './ServiceSectionFlip';
import Team from './TeamSection';
import Process from './ProcessSection';
import Pricing from './PricingSection';
import Project from './ProjectSection';
import Testimonial from './TestimonialSection';
import CounterStyleTwo from '../../components/Elements/Counter/CounterStyleTwo';
import VideoStyleOne from '../../components/Video/VideoStyleOne';
import Blog from './BlogSection';
import CTA from '../../components/Common/CTA';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeThreeMain extends Component {

    render() {

        return (
            <React.Fragment>
	            {/* banner-start */}
				<BannerTwo />
				{/* banner-start */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* ServiceFlip-area-start */}
				<ServiceFlip /> 
				{/* ServiceFlip-area-end */}

				{/* Team-area-start */}
				<Team />
				{/* Team-area-end */}

				{/* Process-area-start */}
				<Process />
				{/* Process-area-end */}

				{/* Pricing-area-start */}
				<Pricing />
				{/* Pricing-area-end */}

				{/* project-area-start */}
				<Project />
				{/* project-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* counter area start */}
				<CounterStyleTwo />
				{/* counter area end */}

				{/* VideoStyleOne area start */}
				<VideoStyleOne />
				{/* VideoStyleOne area end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* newsletter-area-start */}
				<CTA
					ctaSectionClass="rs-cta style1 cta-bg1 pt-70 pb-70"
					ctaTitleClass="epx-title"
					ctaTitle="Grow Your Business and Build Your Website or Software With us."
					ctaButtonClass="readon learn-more"
					ctaButtonLink="#"
					ctaButtonText="Get In Touch"
				/>
				{/* newsletter-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop />
	       		{/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeThreeMain;