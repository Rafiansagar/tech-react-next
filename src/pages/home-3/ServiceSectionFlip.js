import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceFlip from '../../components/Service/SingleServiceFlip';

import serviceIcon1 from '../../../public/assets/img/service/main-home/1.png';
import serviceIcon2 from '../../../public/assets/img/service/main-home/2.png';
import serviceIcon3 from '../../../public/assets/img/service/main-home/3.png';
import serviceIcon4 from '../../../public/assets/img/service/main-home/4.png';
import serviceIcon5 from '../../../public/assets/img/service/main-home/5.png';
import serviceIcon6 from '../../../public/assets/img/service/main-home/6.png';

const ServiceFlip = () => {

    return (
        <div id="rs-service" className="rs-services main-home style2 pt-120 pb-94 md-pt-80 md-pb-60">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text style-bg"
                    subtitle="Services"
                    titleClass="title"
                    title="We Are Offering All Kinds of IT Solutions Services"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon1}
                            Title="Software Development"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon2}
                            Title="Web Development"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon3}
                            Title="Analytic Solutions"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon4}
                            Title="Cloud and DevOps"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon5}
                            Title="Product Design"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlip
                            itemClass="flip-box-inner"
                            serviceImage={serviceIcon6}
                            Title="Data Center"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="Get In Touch"
                        />
                    </div>
                </div>
            </div>
            <div className="shape-animation">
                <div className="shape-part">
                    <img className="dance" src="../../../assets/img/service/s2.png" alt="images" />
                </div>
            </div>
        </div>
    );
}

export default ServiceFlip;