import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceFlipTwo from '../../components/Service/SingleServiceFlipTwo';

import serviceIcon1 from '../../../public/assets/img/service/icons/7.png';
import serviceIcon2 from '../../../public/assets/img/service/icons/8.png';
import serviceIcon3 from '../../../public/assets/img/service/icons/9.png';

const ServiceFlip = () => {

    return (
        <div id="rs-service" className="rs-services style2 modify1 pt-40 pb-120 md-pt-70 md-pb-54">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text gold-color"
                    subtitle="We Are Best"
                    titleClass="title"
                    title="Why Choose Braintech"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlipTwo
                            itemClass="flip-box-inner purple-bg"
                            serviceImage={serviceIcon1}
                            Title="Business Intelligence"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlipTwo
                            itemClass="flip-box-inner gold-bg"
                            serviceImage={serviceIcon2}
                            Title="UI/UX Design"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-26">
                        <SingleServiceFlipTwo
                            itemClass="flip-box-inner blue-bg"
                            serviceImage={serviceIcon3}
                            Title="Data Analysis"
                            TextDesc="We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data."
                            ButtonClass="readon view-more"
                            ButtonText="View More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceFlip;