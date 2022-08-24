import React from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';

function About(props) {

    return (
        <div id="rs-about" className="rs-about pt-130 pb-190 md-pt-80 md-pb-80 sm-pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="img-wrap">
                            <img className="main" src="assets/img/about/about-part-1.png" alt="" />
                            <div className="ly1">
                                <img className="dance" src="assets/img/about/about-part-1-2.png" alt="" />
                            </div>
                            <div className="ly2">
                                <img className="dance2" src="assets/img/about/about-part-1-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 pl-40 md-pl-14 md-pt-240 sm-pt-66">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-30"
                            subtitleClass="sub-text"
                            subtitle="About"
                            titleClass="title pb-20"
                            title="We Are Increasing Business Success With Technology"
                            descClass="desc pr-90 md-pr-0"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                        />
                        {/* Section Title End */}
                        <div className="row">
                            <div className="col-lg-10">
                                {/* Skill Bar Start */}
                                <div className="rs-skillbar style1">
                                    <ProgressBar
                                        completed={92}
                                        height={7}
                                        boxbg={"#eeeeee"}
                                        figurebg={"#f00"}
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
                                        figurebg={"#f00"}
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
                                        figurebg={"#f00"}
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
                                        figurebg={"#f00"}
                                        ProgressBox="progress-box"
                                        ProgressFigure="progress-figure"
                                        ProgressCount="Progress-count"
                                        ProgressLabel="progress-label"
                                        label="Web Development"
                                        ProgressParent="main-div"
                                    />
                                </div>
                                {/* Skill Bar End */}
                                <div className="btn-part mt-54">
                                    <Link href="/contact"> 
                                        <a className="readon learn-more">Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;