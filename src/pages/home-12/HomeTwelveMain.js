import React, { Component } from 'react';
import BannerHomeTwelve from '../../components/Banner/BannerHomeTwelve';
import Service from './ServiceSection';
import Project from './ProjectSection';
import Process from './ProcessSection';
import Testimonial from './TestimonialSection';
import CTA from './CTASection';
import BrandThree from '../../components/Common/Brand/BrandThree';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeTwelveMain extends Component {
	
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

	            {/* scrolltop-start */}
				<ScrollToTop 
					scrollClassName="scrollup oranage"
				/>
	       		{/* scrolltop-end */}
        	</React.Fragment>
        );
    }
}

export default HomeTwelveMain;