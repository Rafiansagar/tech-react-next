import React from 'react';
import ProgressApp from '../../components/Elements/Progress/ProgressLine';
import ProgressAppTwo from '../../components/Elements/Progress/ProgressLineTwo';

const Skill = () => {

    return (
        <div className="our-skills-area pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 mb-30">
                        <div className="our-skills-img">
                            <img src="assets/img/bg/01.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="progress-wrapper mb-30">
                            <div className="section-title  mb-50">
                                <span className="b-sm-left-2"></span>
                                <span className="sub-t-left">our skills</span>
                                <h1>More Than 25+ Years We Provide Solutions</h1>
                            </div>
                            <div className="progress-bar-text">
                                <div className="progress-skill">
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Design Strategy</h4>
                                        </div>
                                        <ProgressApp />
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Marketing Strategy</h4>
                                        </div>
                                        <ProgressAppTwo />
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>UX/UI Strategy</h4>
                                        </div>
                                        <ProgressApp />
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Business Development</h4>
                                        </div>
                                        <ProgressAppTwo />
                                    </div>
                                    <div className="single-skill">
                                        <div className="bar-title">
                                            <h4>Software Development</h4>
                                        </div>
                                        <ProgressApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;