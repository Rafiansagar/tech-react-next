import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import CaseStyleTwo from '../../components/CaseStudy/CaseStyleTwo';

// Breadcrumb Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';

// Case Images
import image1 from '../../../public/assets/img/project/1.jpg';
import image2 from '../../../public/assets/img/project/2.jpg';
import image3 from '../../../public/assets/img/project/3.jpg';
import image4 from '../../../public/assets/img/project/4.jpg';
import image5 from '../../../public/assets/img/project/5.jpg';
import image6 from '../../../public/assets/img/project/6.jpg';


class CaseStudtyStyleTwo extends Component {

    render() {

        return (
            <React.Fragment>
                {/* Header */}
                <Header
                    parentMenu='page'
                    secondParentMenu='case-studies'
                />
                {/* Header */}

                {/* SiteBreadcrumb */}
                <SiteBreadcrumb
                    pageTitle="Case Studies Style 2"
                    pageName="Case Studies Style 2"
                    breadcrumbsImg={bannerbg}
                />
                {/* SiteBreadcrumb */}

                {/* CaseStudy Start */}
                <div className="rs-project style6 pt-120 pb-70 md-pt-80 md-pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image1}
                                    caseTitle="Product Engineering"
                                    caseCategory="IT Technology"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image2}
                                    caseTitle="Analytic Solutions"
                                    caseCategory="IT Technology"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image3}
                                    caseTitle="Project Design"
                                    caseCategory="IT Technology"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image4}
                                    caseTitle="Growth Strategies"
                                    caseCategory="IT Technology"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image5}
                                    caseTitle="Platform Integration"
                                    caseCategory="IT Technology"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-40">
                                <CaseStyleTwo
                                    caseClass="project-item"
                                    caseImage={image6}
                                    caseTitle="Innovative Interfaces"
                                    caseCategory="IT Technology"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* CaseStudy End */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}

                {/* Footer */}
                <Footer />
                {/* Footer */}

                {/* SearchModal */}
                <SearchModal />
                {/* SearchModal */}
            </React.Fragment>

        );
    }
}


export default CaseStudtyStyleTwo;