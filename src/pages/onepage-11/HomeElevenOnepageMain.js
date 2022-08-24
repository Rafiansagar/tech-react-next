import React, { Component } from 'react';
import Blog from '../home-11/BlogSection';
import Team from '../home-11/TeamSection';
import About from '../home-11/AboutSection';
import Service from '../home-11/ServiceSection';
import Project from '../home-11/ProjectSection';
import AboutTwo from '../home-11/AboutSectionTwo';
import Testimonial from '../home-11/TestimonialSection';
import WhyChooseUs from '../home-11/WhyChooseUsSection';
import WhyChooseUs2 from '../home-11/WhyChooseUsSection2';
import Brand from '../../components/Common/Brand';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerHomeEleven from '../../components/Banner/BannerHomeEleven';
import OnepageContactPart from '../../components/Contact/OnepageContact';

class HomeElevenOnepageMain extends Component {

	render() {

		return (
			<React.Fragment>
				{/* banner-start */}
				<BannerHomeEleven />
				{/* banner-start */}

				{/* brand-area-start */}
				<Brand
					brandClass="rs-partner black-dark pt-50 pb-50"
				/>
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
					contactSectionClass="rs-contact black-dark pt-120 md-pt-80"
					contactSectionTitleClass="title testi-title white-color"
				/>
				{/* Contact-area-end */}

				{/* brand-area-start */}
				<Brand
					brandClass="rs-partner style5 pt-70 pb-70"
				/>
				{/* brand-area-end */}

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</React.Fragment>
		);
	}
}

export default HomeElevenOnepageMain;