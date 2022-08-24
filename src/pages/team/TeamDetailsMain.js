import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';

class TeamDetailsMain extends Component {
    render() {
        return (
            <div className="rs-team-Single pt-120 pb-100 md-pt-80 md-pb-60">
                <div className="container">
                    <div className="btm-info-team">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="images-part">
                                    <img src="../../../assets/img/team/4.jpg " alt="images" />
                                </div>
                            </div>
                            <div className="col-lg-7 sm-pt-30">
                                <div className="con-info">
                                    <span className="designation-info">President & CEO </span>
                                    <h2 className="title">Corey Anderson</h2>
                                    <div className="short-desc">
                                        Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive.
                                    </div>
                                    <div className="ps-informations">
                                        <ul className="personal-info">
                                            <li>
                                                <span><i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i></span>
                                                <a href="mailto:claire@website.com">claire@website.com</a>
                                            </li>

                                            <li>
                                                <span><i><FontAwesomeIcon icon={['far', 'phone']} /></i></span> (123) - 222
                                                -1452
                                            </li>
                                        </ul>
                                        <ul className="social-info">
                                            <li>
                                                <Link href="#" as="#">
                                                    <a><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" as="#">
                                                    <a><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" as="#">
                                                    <a><i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" as="#">
                                                    <a><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 pr-55 md-pr-15">
                            <div className="project-con">
                                <h3>Biography</h3>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps data analytics communication.</p>
                                <p>User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Languages realizes why a new common language one could refuse to pay expensive translators.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h3>Professional Skills</h3>
                            {/* Skill Bar Start */}
                            <div className="rs-skillbar style1 modify2">
                                <div className="cl-skill-bar">
                                    <ProgressBar
                                        completed={80}
                                        height={9}
                                        boxbg={"#fff"}
                                        figurebg={"#007bff"}
                                        ProgressBox="skillbar"
                                        ProgressFigure="skillbar-bar"
                                        ProgressCount="skill-bar-percent"
                                        ProgressLabel="skillbar-title"
                                        label="Software Development"
                                        ProgressParent="main-div"
                                    />
                                    <ProgressBar
                                        completed={74}
                                        height={9}
                                        boxbg={"#fff"}
                                        figurebg={"#007bff"}
                                        ProgressBox="skillbar"
                                        ProgressFigure="skillbar-bar"
                                        ProgressCount="skill-bar-percent"
                                        ProgressLabel="skillbar-title"
                                        label="Graphic Design"
                                        ProgressParent="main-div"
                                    />
                                    <ProgressBar
                                        completed={89}
                                        height={9}
                                        boxbg={"#fff"}
                                        figurebg={"#007bff"}
                                        ProgressBox="skillbar"
                                        ProgressFigure="skillbar-bar"
                                        ProgressCount="skill-bar-percent"
                                        ProgressLabel="skillbar-title"
                                        label="JavaScript"
                                        ProgressParent="main-div"
                                    />
                                    <ProgressBar
                                        completed={90}
                                        height={9}
                                        boxbg={"#fff"}
                                        figurebg={"#007bff"}
                                        ProgressBox="skillbar"
                                        ProgressFigure="skillbar-bar"
                                        ProgressCount="skill-bar-percent"
                                        ProgressLabel="skillbar-title"
                                        label="Web Development"
                                        ProgressParent="main-div"
                                    />
                                    <ProgressBar
                                        completed={84}
                                        height={9}
                                        boxbg={"#fff"}
                                        figurebg={"#007bff"}
                                        ProgressBox="skillbar"
                                        ProgressFigure="skillbar-bar"
                                        ProgressCount="skill-bar-percent"
                                        ProgressLabel="skillbar-title"
                                        label="Cyber Security"
                                        ProgressParent="main-div"
                                    />
                                </div>
                            </div>
                            {/* Skill Bar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamDetailsMain;