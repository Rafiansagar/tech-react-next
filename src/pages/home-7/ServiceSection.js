import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceThree from '../../components/Service/SingleServiceThree';

// Service Image Icons
import serviceIcon1 from '../../../public/assets/img/service/style4/1.png';
import serviceIcon2 from '../../../public/assets/img/service/style4/2.png';
import serviceIcon3 from '../../../public/assets/img/service/style4/3.png';

const Service = () => {

    return (
        <div className="rs-services style4 gray-bg pt-110 pb-120 md-pt-74 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text"
                    subtitle="Services"
                    titleClass="title"
                    title="Our Featured Services "
                    descClass="desc desc-text"
                    description="We are working in IT services for 40 years and developing software applications and mobile apps for clients all over the world. "
                />
                <div className="row">
                    <div className="col-md-4">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            Title="Warranty Management IT"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-md-4">
                        <SingleServiceThree
                            itemClass="services-item active"
                            serviceImage={serviceIcon2}
                            Title="Product Control Services"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                            serviceBtn="Read More"
                        />
                    </div>
                    <div className="col-md-4">
                        <SingleServiceThree
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            Title="Quality Control System"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                            serviceBtn="Read More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;