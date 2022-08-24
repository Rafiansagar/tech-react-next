import Link from 'next/link';

import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';

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

const Service = () => {

    return (
        <div id="rs-service" className="rs-services style3 modify3 rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row md-mb-60">
                    <div className="col-lg-6 mb-60 md-mb-20">
                        <SectionTitle
                            sectionClass="sec-title2 zIndex1"
                            subtitleClass="sub-text white-color"
                            subtitle="Services"
                            titleClass="title testi-title white-color"
                            title="What Solutions We Provide to Our Valued Customers"
                        />
                    </div>
                    <div className="col-lg-6 mb-60 md-mb-0">
                        <div className="btn-part text-right mt-60 md-mt-0 md-text-left">
                            <Link href="/contact">
                                <a className="readon started">Get Started</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item orange-bg"
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
            <div className="line-inner orange-dark">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Service;