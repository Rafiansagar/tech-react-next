import React, { Component } from 'react';
import CTA from '../home-10/CTASection';
import Team from '../home-3/TeamSection';
import Blog from '../home-10/BlogSection';
import Feature from '../home-10/FeatureSection';
import Service from '../home-10/ServiceSection';
import Project from '../home-10/ProjectSection';
import Counter from '../home-10/CounterSection';
import Testimonial from '../home-10/TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeTen from '../../components/Banner/BannerHomeTen';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeTenOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* Slider-start */}
				<BannerHomeTen />
				{/* Slider-start */}

				{/* Feature-area-start */}
				<Feature />
				{/* Feature-area-end */}

				{/* Counter-start */}
				<Counter />
				{/* Counter-end */}

				{/* Service-start */}
				<Service />
				{/* Service-end */}

				{/* Project-start */}
				<Project />
				{/* Project-end */}

				{/* Team-start */}
				<Team />
				{/* Team-end */}

				{/* Testimonial-start */}
				<Testimonial />
				{/* Testimonial-end */}

				{/* Blog-area-start */}
				<Blog />
	            {/* Blog-area-end */}

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact sec-bg pt-120 md-pt-80"
				/>
				{/* Contact-area-end */}

				{/* CTA-area-start */}
				<CTA />
	            {/* CTA-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop />
	            {/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeTenOnepageMain;