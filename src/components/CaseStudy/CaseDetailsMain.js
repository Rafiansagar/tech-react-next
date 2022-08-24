import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CaseDetails extends Component {

    render() {

        return (
            <React.Fragment>
                {/* <!-- case-details-area-start --> */}
                <div className="case-details-area pt-130 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="case-details-wrapper">
                                    <div className="case-details-img">
                                        <img src="assets/img/project/case-details.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 mb-30">
                                        <div className="case-details-text">
                                            <h1>IT Consultancy</h1>
                                            <span>Our expertise allows business owners to reap the benefits of tapping our IT speciists without having to hire a full-time emploee. In ation, it also reduces the risks associated with not properly maintaining core</span>
                                            <div className="case-post-tag">
                                                <span>Project Tags :</span>
                                                <a href="#">IT,</a>
                                                <a href="#">Management,</a>
                                                <a href="#">Strategy, </a>
                                                <a href="#">Product Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 mb-30">
                                        <div className="case-details-content">
                                            <p>Must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p>
                                            <div className="case-share-icon">
                                                <span>Project Share :</span>
                                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-layout-bg mt-55">
                                    <div className="gallery-layout-info">
                                        <span>Case Name</span>
                                        <h5>IT Consultancy</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>Category</span>
                                        <h5>Product Design</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>Date</span>
                                        <h5>10 Sep 2019</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>Clients</span>
                                        <h5>BDevs Ltd</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- case-details-area-end --> */}

                {/* <!-- case-studies-start --> */}
                <div className="case-studies grey-bg pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-01.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-02.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="case-studies-wrapper mb-30">
                                    <div className="case-studies-img">
                                        <img src="assets/img/project/c-03.jpg" alt="" />
                                        <div className="case-studies-text">
                                            <span>Design strategy</span>
                                            <h3><a href="#">Creative Idea Buildup</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="case-studies-info">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- case-studies-end --> */}
            </React.Fragment>
        );
    }
}

export default CaseDetails;