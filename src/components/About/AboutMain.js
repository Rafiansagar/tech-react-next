import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SectionTitle from '../../components/Common/SectionTitle';
import OwlCarousel from 'react-owl-carousel2';
import SingleTeam from '../../components/Team/SingleTeam';
import SingleProcess from '../../components/Process/SingleProcess';
import SinglePricing from '../../components/Pricing/SinglePricing';
import VideoStyleThree from '../../components/Video/VideoStyleThree';

// Team Members
import teamimg1 from '../../../public/assets/img/team/1.jpg';
import teamimg2 from '../../../public/assets/img/team/2.jpg';
import teamimg3 from '../../../public/assets/img/team/3.jpg';
import teamimg4 from '../../../public/assets/img/team/4.jpg';
import teamimg5 from '../../../public/assets/img/team/5.jpg';
import teamimg6 from '../../../public/assets/img/team/6.jpg';
import teamimg7 from '../../../public/assets/img/team/7.jpg';

// Working Process Images
import processImage1 from '../../../public/assets/img/process/1.png';
import processImage2 from '../../../public/assets/img/process/2.png';
import processImage3 from '../../../public/assets/img/process/3.png';
import processImage4 from '../../../public/assets/img/process/4.png';

// Pricing Image
import silverImg from '../../../public/assets/img/pricing/1.png';
import goldImg from '../../../public/assets/img/pricing/2.png';
import platinumImg from '../../../public/assets/img/pricing/3.png';

const AboutMain = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                dots: false,
            },
            768: {
                items: 2,
                stagePadding: 0,
                dots: true,
            },
            992: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <React.Fragment>
            {/* about-area-start */}
            <div id="rs-about" className="rs-about gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-mb-30">
                            <div className="rs-animation-shape">
                                <div className="images">
                                    <img src="assets/img/about/about-3.png" alt="" />
                                </div>
                                <div className="middle-image2">
                                    <img className="dance" src="assets/img/about/effect-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-14">
                            <div className="contact-wrap">
                                {/* Section Title Start */}
                                <SectionTitle
                                    sectionClass="sec-title mb-30"
                                    subtitleClass="sub-text style-bg"
                                    subtitle="About Us"
                                    titleClass="title pb-36"
                                    title="We Are Increasing Business Success With Technology"
                                    descClass="desc pb-34"
                                    description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                                    secondDescClass="margin-0 pb-16"
                                    secondDescription="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying."
                                />
                                {/* Section Title End */}
                                <div className="btn-part">
                                    <Link href="/contact">
                                        <a className="readon learn-more">Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-image">
                        <img className="top dance" src="assets/img/about/dotted-3.png" alt="" />
                        <img className="bottom dance" src="assets/img/about/shape3.png" alt="" />
                    </div>
                </div>
            </div>
            {/* about-area-end */}

            {/* team-area-start */}
            <div id="rs-team" className="rs-team pt-120 pb-120 md-pt-80 md-pb-80 xs-pb-54">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Team"
                        titleClass="title white-color"
                        title="Expert IT Consultants"
                    />
                    <OwlCarousel options={options} >
                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg1}
                            Title="Makhaia Antitni"
                            Designation="President & CEO"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg2}
                            Title="Corey Anderson"
                            Designation="CEO & Founder"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg3}
                            Title="Masud Rana"
                            Designation="Web Developer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg4}
                            Title="Najmul Huda"
                            Designation="Digital Marketer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg5}
                            Title="Rushali Rumi"
                            Designation="Design Lead"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg6}
                            Title="Abu Sayed"
                            Designation="App Developer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg7}
                            Title="Sonia Akhter"
                            Designation="Graphic Artist"
                        />
                    </OwlCarousel>
                </div>
            </div>
            {/* team-area-end */}

            {/* working-process-area-start */}
            <div className="rs-process style2 pt-120 pb-112 md-pt-80 md-pb-72">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text style-bg"
                        subtitle="Process"
                        titleClass="title title2"
                        title="Our Working Process"
                    />
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 md-mb-50">
                            <SingleProcess
                                itemClass="addon-process"
                                processImage={processImage1}
                                titleClass="title"
                                Title="Discovery"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6 md-mb-50">
                            <SingleProcess
                                itemClass="addon-process"
                                processImage={processImage2}
                                titleClass="title"
                                Title="Planning"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-50">
                            <SingleProcess
                                itemClass="addon-process"
                                processImage={processImage3}
                                titleClass="title"
                                Title="Execute"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <SingleProcess
                                itemClass="addon-process"
                                processImage={processImage4}
                                titleClass="title"
                                Title="Deliver"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* working-process-area-end */}

            {/* pricing-area-start */}
            <div className="rs-pricing style2 gray-bg pt-120 pb-144 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text style-bg"
                        subtitle="Pricing"
                        titleClass="title title2"
                        title="Our Pricing Plan"
                    />
                    <div className="row">
                        <div className="col-lg-4 md-mb-30">
                            <SinglePricing
                                itemClass="pricing-table new-style2"
                                badge="Silver"
                                pricingImage={silverImg}
                                currency="$"
                                price="29.99"
                                period="Monthly Package"
                                buttonClass="readon buy-now"
                                buttonText="Buy Now"
                                buttonURL="#"

                                // Feature List (1 to 4 item)
                                featureText1="Powerful Admin Panel"
                                ability1="yes"

                                featureText2="1 Native Android App"
                                ability2="yes"

                                featureText3="Multi-Language Support"
                                ability3="no"

                                featureText4="Support via E-mail and Phone"
                                ability4="no"
                            />
                        </div>

                        <div className="col-lg-4 md-mb-30">
                            <SinglePricing
                                itemClass="pricing-table primary-bg"
                                badge="Gold"
                                pricingImage={goldImg}
                                currency="$"
                                price="39.99"
                                period="Monthly Package"
                                buttonClass="readon buy-now"
                                buttonText="Buy Now"
                                buttonURL="#"

                                // Feature List (1 to 4 item)
                                featureText1="Powerful Admin Panel"
                                ability1="yes"

                                featureText2="1 Native Android App"
                                ability2="yes"

                                featureText3="Multi-Language Support"
                                ability3="yes"

                                featureText4="Support via E-mail and Phone"
                                ability4="no"
                            />
                        </div>

                        <div className="col-lg-4">
                            <SinglePricing
                                itemClass="pricing-table new-style2"
                                badge="Platinum"
                                pricingImage={platinumImg}
                                currency="$"
                                price="79.99"
                                period="Monthly Package"
                                buttonClass="readon buy-now"
                                buttonText="Buy Now"
                                buttonURL="#"

                                // Feature List (1 to 4 item)
                                featureText1="Powerful Admin Panel"
                                ability1="yes"

                                featureText2="1 Native Android App"
                                ability2="yes"

                                featureText3="Multi-Language Support"
                                ability3="yes"

                                featureText4="Support via E-mail and Phone"
                                ability4="yes"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* pricing-area-end */}

            {/* VideoStyleThree area start */}
            <div class="rs-contact-wrap bg7 pt-120 pb-390 md-pt-80">
                <div class="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Contact"
                        titleClass="title white-color"
                        title="Request A Free Consultation"
                    />
                </div>
            </div>
            <VideoStyleThree />
            {/* VideoStyleThree area end */}

        </React.Fragment>
    )
}

export default AboutMain;