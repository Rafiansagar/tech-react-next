import React, { Component, useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';

function About(props) {

    return (
        <div id="rs-about" className="rs-about bg17 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="images">
                            <img src="assets/img/about/about-2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-30"
                            subtitleClass="sub-text style2"
                            subtitle="About Us"
                            titleClass="title pb-38"
                            title="We Are Increasing Business Success With Technology"
                            descClass="desc pb-36"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                            secondDescClass="margin-0 pb-16"
                            secondDescription="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying."
                        />
                        {/* Section Title End */}
                        <div className="btn-part">
                            <Link href="/contact"> 
                                <a className="readon learn-more contact-us">Learn More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;