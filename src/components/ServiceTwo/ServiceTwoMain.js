import Link from 'next/link';
import React, { Component } from 'react';
import CTA from '../../components/Common/CTA';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';
import PricingMain from '../Pricing';
import SingleProcess from '../../components/Common/Process';

// Service Image Icons
import mainIcon1 from '../../../public/assets/img/service/style2/main-img/1.png';
import hoverIcon1 from '../../../public/assets/img/service/style2/hover-img/1.png';
import mainIcon2 from '../../../public/assets/img/service/style2/main-img/2.png';
import hoverIcon2 from '../../../public/assets/img/service/style2/hover-img/2.png';
import mainIcon3 from '../../../public/assets/img/service/style2/main-img/3.png';
import hoverIcon3 from '../../../public/assets/img/service/style2/hover-img/3.png';
import mainIcon4 from '../../../public/assets/img/service/style2/main-img/4.png';
import hoverIcon4 from '../../../public/assets/img/service/style2/hover-img/4.png';
import mainIcon5 from '../../../public/assets/img/service/style2/main-img/5.png';
import hoverIcon5 from '../../../public/assets/img/service/style2/hover-img/5.png';
import mainIcon6 from '../../../public/assets/img/service/style2/main-img/6.png';
import hoverIcon6 from '../../../public/assets/img/service/style2/hover-img/6.png';

class ServiceTwoMain extends Component {

    render() {

        return (
            <React.Fragment>
                {/* services-area-start */}
                <div className="rs-services style3 gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item"
                                    prefix="01"
                                    mainIcon={mainIcon1}
                                    hoverIcon={hoverIcon1}
                                    Title="Software Development"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item pink-bg"
                                    prefix="02"
                                    mainIcon={mainIcon2}
                                    hoverIcon={hoverIcon2}
                                    Title="Web Development"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item aqua-bg"
                                    prefix="03"
                                    mainIcon={mainIcon3}
                                    hoverIcon={hoverIcon3}
                                    Title="Analytic Solutions"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item paste-bg"
                                    prefix="04"
                                    mainIcon={mainIcon4}
                                    hoverIcon={hoverIcon4}
                                    Title="Clould & DevOps"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item purple-bg"
                                    prefix="05"
                                    mainIcon={mainIcon5}
                                    hoverIcon={hoverIcon5}
                                    Title="Product & Design"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-20">
                                <SingleServiceTwo
                                    itemClass="services-item green-bg"
                                    prefix="06"
                                    mainIcon={mainIcon6}
                                    hoverIcon={hoverIcon6}
                                    Title="Database Administrator"
                                    Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* services-area-end */}

                {/* process-area-start */}
                <div className="rs-process style5 bg5 pt-120 pb-120 md-pt-80 md-pb-64">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 md-mb-40">
                                <div className="process-wrap">
                                    <SectionTitle
                                        sectionClass="sec-title mb-30"
                                        subtitleClass="sub-text new"
                                        subtitle="Working Process"
                                        titleClass="title white-color"
                                        title="Our Working Process -  How We Work For Our Customers"
                                    />
                                    <div className="btn-part mt-40">
                                        <Link href="/contact" as="/contact">
                                            <a className="readon learn-more contact-us">Contact Us</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 pl-30 md-pl-15">
                                <div className="row">
                                    <div className="col-md-6 mb-40">
                                        <SingleProcess
                                            processNumber="1"
                                            processTitle="Discovery"
                                            processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                        />
                                    </div>
                                    <div className="col-md-6 mb-40">
                                        <SingleProcess
                                            processNumber="2"
                                            processTitle="Planning"
                                            processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                        />
                                    </div>
                                    <div className="col-md-6 sm-mb-40">
                                        <SingleProcess
                                            processNumber="3"
                                            processTitle="Execute"
                                            processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <SingleProcess
                                            processNumber="4"
                                            processTitle="Deliver"
                                            processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* process-area-End */}

                {/* Pricing Section Start */}
                <PricingMain />
                {/* Pricing Section End */}

                {/* newsletter-area-start */}
                <CTA
                    ctaSectionClass="rs-cta style1 cta-bg1 pt-70 pb-70"
                    ctaTitleClass="epx-title"
                    ctaTitle="Grow Your Business and Build Your Website or Software With us."
                    ctaButtonClass="readon learn-more"
                    ctaButtonLink="#"
                    ctaButtonText="Get In Touch"
                />
                {/* newsletter-area-end */}
            </React.Fragment>
        );
    }
}

export default ServiceTwoMain;