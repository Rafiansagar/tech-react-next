import React, { Component } from 'react';
import CTA from '../home-12/CTASection';
import Service from '../home-12/ServiceSection';
import Project from '../home-12/ProjectSection';
import Process from '../home-12/ProcessSection';
import Testimonial from '../home-12/TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BrandThree from '../../components/Common/Brand/BrandThree';
import BannerHomeTwelve from '../../components/Banner/BannerHomeTwelve';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeTwelveOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* banner-start */}
				<BannerHomeTwelve />
				{/* banner-start */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* Project-area-start */}
				<Project />
				{/* Project-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* brand-area-start */}
				<BrandThree />
	            {/* brand-area-end */}

				{/* Process-area-start */}
				<Process />
	            {/* Process-area-end */}

				{/* CTA-area-start */}
				<CTA />
				{/* CTA-area-end */}

				{/* Contact-area-start */}
				<OnepageContactPart 
					contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
					contactSubTitleClass="sub-text contact mb-14 orange-color"
					contactSectionTitleClass="title testi-title"
					contactBoxClass="contact-box orange-box"
					submitBtnClass="readon started submit get-ready3"
				/>
				{/* Contact-area-end */}

	            {/* scrolltop-start */}
				<ScrollToTop 
					scrollClassName="scrollup oranage"
				/>
				{/* scrolltop-end */}

        	</React.Fragment>
        );
    }
}

export default HomeTwelveOnepageMain;