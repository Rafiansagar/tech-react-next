import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import CaseStyleFour from '../../components/CaseStudy/CaseStyleFour';

// Breadcrumb Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';

// Case Images
import image1 from '../../../public/assets/img/project/style3/1.jpg';
import image2 from '../../../public/assets/img/project/style3/2.jpg';
import image3 from '../../../public/assets/img/project/style3/3.jpg';
import image4 from '../../../public/assets/img/project/style3/4.jpg';
import image5 from '../../../public/assets/img/project/style3/5.jpg';
import image6 from '../../../public/assets/img/project/style3/6.jpg';


class CaseStudtyStyleFour extends Component {

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
                    pageTitle="Case Studies Style 4"
                    pageName="Case Studies Style 4"
                    breadcrumbsImg={bannerbg}
                />
                {/* SiteBreadcrumb */}

                {/* CaseStudy Start */}
                <div className="rs-project style4 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image1}
                                    caseTitle="Product Engineering"
                                    caseCategory="Software"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image2}
                                    caseTitle="Analytic Solutions"
                                    caseCategory="Software"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image3}
                                    caseTitle="Project Design"
                                    caseCategory="Software"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 md-mb-30">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image4}
                                    caseTitle="Growth Strategies"
                                    caseCategory="Software"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 sm-mb-30">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image5}
                                    caseTitle="Platform Integration"
                                    caseCategory="Software"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CaseStyleFour
                                    caseClass="project-item"
                                    caseImage={image6}
                                    caseTitle="Innovative Interfaces"
                                    caseCategory="Software"
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


export default CaseStudtyStyleFour;