import React, { Component, useState } from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleFeature from '../../components/Service/SingleFeature';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';


import featureIcon1 from '../../../public/assets/img/features/icons/1.png';
import featureIcon2 from '../../../public/assets/img/features/icons/2.png';
import featureIcon3 from '../../../public/assets/img/features/icons/3.png';
import featureIcon4 from '../../../public/assets/img/features/icons/4.png';

const Feature = () => {

    return (
        <div id="rs-about" className="rs-specialty pt-170 pb-230 md-pb-184" style={{'background-image': 'url(assets/img/bg/shape-bg2.png)', 'background-size': 'cover'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-feature">
                            <div className="row">
                                <div className="col-md-6 mt-20 pr-6 md-pb-20 sm-pr-14">
                                    <SingleFeature 
                                        featureClass="icon-box-area mb-20"
                                        featureImage={featureIcon1}
                                        featureTitle="Experts Problem Solvers"
                                    />
                                    <SingleFeature 
                                        featureClass="icon-box-area purple-bg"
                                        featureImage={featureIcon3}
                                        featureTitle="Creative Product Analitic"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <SingleFeature 
                                        featureClass="icon-box-area blue-bg mb-20"
                                        featureImage={featureIcon2}
                                        featureTitle="Regular Updates & Bug fixes"
                                    />
                                    <SingleFeature 
                                        featureClass="icon-box-area pink-bg"
                                        featureImage={featureIcon4}
                                        featureTitle="High-Rated Quick Support"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-54 md-pl-14 md-pt-60">
                        <SectionTitle 
                            sectionClass="sec-title6 mb-30"
                            subtitleClass="sub-text gold-color"
                            subtitle="Our Specialty"
                            titleClass="title pb-20"
                            title="What's so Special About Braintech"
                            description="Bring to the table win-win survival strategies to ensure dotted proactive domination. At the end of the day, going forward, a new normal that has evolved "
                        />
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
                                label="Analytics"
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
                                label="Development"
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
                                label="Solutions"
                                ProgressParent="main-div"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;