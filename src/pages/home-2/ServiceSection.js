import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../../public/assets/img/service/icons/1.png';
import serviceIcon2 from '../../../public/assets/img/service/icons/2.png';
import serviceIcon3 from '../../../public/assets/img/service/icons/3.png';
import serviceIcon4 from '../../../public/assets/img/service/icons/4.png';
import serviceIcon5 from '../../../public/assets/img/service/icons/5.png';
import serviceIcon6 from '../../../public/assets/img/service/icons/6.png';
import leftShape from '../../../public/assets/img/service/shape-2.png';
import rightShape from '../../../public/assets/img/service/shape-3.png';

const Service = () => {

    return (
        <div id="rs-service" className="relative rs-services style4 modify1 services3 gray-bg pt-120 md-pt-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text"
                    subtitle="Services"
                    titleClass="title"
                    title="We Are Offering All Kinds of IT Solutions Services"
                    effectClass="heading-line"
                />                
            </div>
            <div className="bg-section pb-120 md-pb-80">
                <div className="container">
                    <div className="row gray-bg pb-36 pl-26 pr-26 md-pl-0 md-pr-0">
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon1}
                                Title="Software Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon2}
                                Title="Web Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon3}
                                Title="Analytic Solutions" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon4}
                                Title="Clould & DevOps" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-20">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon5}
                                Title="Product & Design" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon6}
                                Title="Data Center" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                    </div>
                    <div className="btn-part text-center mt-66">
                        <Link href="/service">
                            <a className="readon learn-more contact-us">View All Services</a>
                        </Link>
                    </div>
                </div>
                <div className="shape-part">
                    <div className="left-side">
                        <img src={leftShape} alt="" /> 
                    </div>
                    <div className="right-side">
                        <img src={rightShape} alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;