import React, { Component, useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';

// About Image
import AboutImage from '../../../public/assets/img/about/about-4.png';

function About(props) {

    return (
        <div id="rs-about" className="rs-about style2 pt-110 pb-120 md-pt-75 md-pb-80">
            <div className="image-part">
                <img
                    src={AboutImage}
                    alt="about"
                /> 
            </div>
            <div className="container">
                <div className="row">
                    <div className="offset-lg-5"></div>
                    <div className="col-lg-7 pl-54 md-pl-14">
                        <div className="contact-wrap">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text style4-bg"
                                subtitle="About Us"
                                titleClass="title pb-20"
                                title="We Are Increasing Business Success With Technology"
                                descClass="desc"
                                description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                            />
                            {/* Section Title End */}
                            <div className="rs-skillbar style1 home4">
                                <ProgressBar
                                    completed={92}
                                    height={7}
                                    boxbg={"#eeeeee"}
                                    figurebg={"#FD6509"}
                                    ProgressBox="progress-box"
                                    ProgressFigure="progress-figure"
                                    ProgressCount="Progress-count"
                                    ProgressLabel="progress-label"
                                    label="Software Development"
                                    ProgressParent="main-div"
                                />
                                <ProgressBar
                                    completed={80}
                                    height={7}
                                    boxbg={"#eeeeee"}
                                    figurebg={"#03DEA8"}
                                    ProgressBox="progress-box"
                                    ProgressFigure="progress-figure"
                                    ProgressCount="Progress-count"
                                    ProgressLabel="progress-label"
                                    label="Cyber Security"
                                    ProgressParent="main-div"
                                />
                                <ProgressBar
                                    completed={95}
                                    height={7}
                                    boxbg={"#eeeeee"}
                                    figurebg={"#0A99FD"}
                                    ProgressBox="progress-box"
                                    ProgressFigure="progress-figure"
                                    ProgressCount="Progress-count"
                                    ProgressLabel="progress-label"
                                    label="Artificial Intelligence"
                                    ProgressParent="main-div"
                                />
                                <ProgressBar
                                    completed={78}
                                    height={7}
                                    boxbg={"#eeeeee"}
                                    figurebg={"#F00674"}
                                    ProgressBox="progress-box"
                                    ProgressFigure="progress-figure"
                                    ProgressCount="Progress-count"
                                    ProgressLabel="progress-label"
                                    label="Web Development"
                                    ProgressParent="main-div"
                                />
                            </div>
                            <div className="btn-part mt-54">
                                <Link href="/contact">
                                    <a className="readon started">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;