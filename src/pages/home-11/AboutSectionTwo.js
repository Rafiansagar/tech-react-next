import React, { Component, useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';

// About Image
import AboutImage from '../../../public/assets/img/about/about-5.png';

function AboutTwo(props) {

    return (
        <div className="rs-about style2 modify1 black-dark pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hidden-md">
                        <div className="images">
                            <img
                                src={AboutImage}
                                alt="about"
                            /> 
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-30"
                            subtitleClass="sub-text white-color style4-bg"
                            subtitle="About Us"
                            titleClass="title white-color pb-20"
                            title="We Are Increasing Business Success With Technology"
                            descClass="desc white-color"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                        />
                        {/* Section Title End */}
                        <div className="rs-skillbar style1 home4">
                            <ProgressBar
                                completed={92}
                                height={7}
                                boxbg={"#eeeeee"}
                                figurebg={"#FD6509"}
                                labelColor={"#ffffff"}
                                countColor={"#ffffff"}
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
                                labelColor={"#ffffff"}
                                countColor={"#ffffff"}
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
                                labelColor={"#ffffff"}
                                countColor={"#ffffff"}
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
                                labelColor={"#ffffff"}
                                countColor={"#ffffff"}
                                ProgressBox="progress-box"
                                ProgressFigure="progress-figure"
                                ProgressCount="Progress-count"
                                ProgressLabel="progress-label"
                                label="Web Development"
                                ProgressParent="main-div"
                            />
                            <div className="btn-part mt-46">
                                <Link href="/contact">
                                    <a className="readon started">Get Started</a>
                                </Link>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTwo;