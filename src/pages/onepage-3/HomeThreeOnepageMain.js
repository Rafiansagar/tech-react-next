import React, { Component } from 'react';
import Team from '../home-3/TeamSection';
import Blog from '../home-3/BlogSection';
import About from '../home-3/AboutSection';
import Service from '../home-3/ServiceSection';
import Process from '../home-3/ProcessSection';
import Pricing from '../home-3/PricingSection';
import Project from '../home-3/ProjectSection';
import ServiceFlip from '../home-3/ServiceSectionFlip';
import Testimonial from '../home-3/TestimonialSection';
import CTA from '../../components/Common/CTA';
import BannerTwo from '../../components/Banner/BannerTwo';
import ScrollToTop from '../../components/Common/ScrollTop';
import VideoStyleOne from '../../components/Video/VideoStyleOne';
import OnepageContactPart from '../../components/Contact/OnepageContact';
import CounterStyleTwo from '../../components/Elements/Counter/CounterStyleTwo';


class HomeThreeOnepageMain extends Component {

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

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
				/>
				{/* Contact-area-end */}

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

export default HomeThreeOnepageMain;