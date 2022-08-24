import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceFive from '../../components/Service/SingleServiceFive';

// Service Icons
import imgMain5 from '../../../public/assets/img/service/style3/main-img/5.png';
import imgHover5 from '../../../public/assets/img/service/style3/hover-img/5.png';

import imgMain6 from '../../../public/assets/img/service/style3/main-img/6.png';
import imgHover6 from '../../../public/assets/img/service/style3/hover-img/6.png';

import imgMain7 from '../../../public/assets/img/service/style3/main-img/7.png';
import imgHover7 from '../../../public/assets/img/service/style3/hover-img/7.png';

import imgMain8 from '../../../public/assets/img/service/style3/main-img/8.png';
import imgHover8 from '../../../public/assets/img/service/style3/hover-img/8.png';

import imgMain9 from '../../../public/assets/img/service/style3/main-img/9.png';
import imgHover9 from '../../../public/assets/img/service/style3/hover-img/9.png';

import imgMain10 from '../../../public/assets/img/service/style3/main-img/10.png';
import imgHover10 from '../../../public/assets/img/service/style3/hover-img/10.png';

const ServiceMain = () => {

    return (
        <div className="rs-services style3 modify1 pt-120 pb-100 md-pt-70 md-pb-50">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text gold-color"
                    subtitle="Work For Any Industry"
                    titleClass="title"
                    title="Best Solutions, For All Organizations"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item pink-light-bg"
                            MainImg={imgMain5}
                            HoverImg={imgHover5}
                            Title="Data Analytics"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item blue2-bg"
                            MainImg={imgMain6}
                            HoverImg={imgHover6}
                            Title="Machine Learning"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item paste2-bg"
                            MainImg={imgMain7}
                            HoverImg={imgHover7}
                            Title="Artificial Intelligence"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item purple2-bg"
                            MainImg={imgMain8}
                            HoverImg={imgHover8}
                            Title="Data Science"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item cyan2-bg"
                            MainImg={imgMain9}
                            HoverImg={imgHover9}
                            Title="Mobile App Development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item pink2-bg"
                            MainImg={imgMain10}
                            HoverImg={imgHover10}
                            Title="IOT Integration"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                            serviceBtn="Read More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceMain;