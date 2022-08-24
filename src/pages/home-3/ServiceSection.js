import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../../public/assets/img/service/style1/1.png';
import serviceIcon2 from '../../../public/assets/img/service/style1/2.png';
import serviceIcon3 from '../../../public/assets/img/service/style1/3.png';

const Service = () => {

    return (
        <div className="rs-services main-home style2 pt-120 pb-100 md-pt-80 md-pb-60">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text style-bg"
                    subtitle="Solutions"
                    titleClass="title title2"
                    title="Over 30+ Years IT & Technology Solutions Includes"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleService
                            itemClass="services-item shape1"
                            serviceImage={serviceIcon1}
                            Title="IT Management"
                            Text="Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleService
                            itemClass="services-item shape1 active"
                            serviceImage={serviceIcon2}
                            Title="Cloud Services"
                            Text="Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleService
                            itemClass="services-item shape1"
                            serviceImage={serviceIcon3}
                            Title="Data Security"
                            Text="Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;