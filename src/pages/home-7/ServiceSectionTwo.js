import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceThree from '../../components/Service/SingleServiceThree';

// Service Image Icons
import serviceIcon1 from '../../../public/assets/img/service/style5/1.png';
import serviceIcon2 from '../../../public/assets/img/service/style5/2.png';
import serviceIcon3 from '../../../public/assets/img/service/style5/3.png';
import serviceIcon4 from '../../../public/assets/img/service/style5/4.png';
import serviceIcon5 from '../../../public/assets/img/service/style5/5.png';
import serviceIcon6 from '../../../public/assets/img/service/style5/6.png';

const ServiceTwo = () => {
    return (
        <div id="rs-service" className="rs-services style4 modify1 gray-bg pt-110 pb-120 md-pt-74 md-pb-40 sm-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text"
                    subtitle="Our Latest Services"
                    titleClass="title"
                    title="Preparing for your success, we provide IT solutions"
                />
                <div className="row">
                    <div className="col-lg-4 mb-20">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            Title="IT Management"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 mb-20">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon2}
                            Title="IT Consulting"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 mb-20">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            Title="Data Security"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 md-mb-20">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon4}
                            Title="Infrastructure Plan"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon5}
                            Title="IT Design"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon6}
                            Title="Software Engineering"
                            Text="We denounce with rightous indig nationand dislike men who are so beguiled demoralized"
                            serviceBtn="Read More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceTwo;