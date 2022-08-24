import React, { Component } from 'react';
import Team from '../home-5/TeamSection';
import Blog from '../home-5/BlogSection';
import About from '../home-5/AboutSection';
import Project from '../home-5/ProjectSection';
import Service from '../home-5/ServiceSection';
import AboutTwo from '../home-5/AboutSectionTwo';
import BrandHomeFive from '../home-5/BrandSection';
import Testimonial from '../home-5/TestimonialSection';
import WhyChooseUs from '../home-5/WhyChooseUsSection';
import WhyChooseUs2 from '../home-5/WhyChooseUsSection2';
import Brand from '../../components/Common/Brand';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeFive from '../../components/Banner/BannerHomeFive';
import OnepageContactPart from '../../components/Contact/OnepageContact';


class HomeFiveOnepageMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* banner-start */}
				<BannerHomeFive />
				{/* banner-start */}

				{/* brand-area-start */}
				<BrandHomeFive />
	            {/* brand-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* About-area-start */}
				<AboutTwo />
				{/* About-area-end */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* WhyChooseUs-area-start */}
				<WhyChooseUs />
				{/* WhyChooseUs-area-end */}

				{/* Team-area-start */}
				<Team />
				{/* Team-area-end */}

				{/* Project-area-start */}
				<Project />
				{/* Project-area-end */}

				{/* WhyChooseUs-area-start */}
				<WhyChooseUs2 />
				{/* WhyChooseUs-area-end */}

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

export default HomeFiveOnepageMain;