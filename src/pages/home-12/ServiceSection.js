import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceSix from '../../components/Service/SingleServiceSix';

// Service Image Icons
import serviceImg1 from '../../../public/assets/img/service/style9/1.jpg';
import serviceImg2 from '../../../public/assets/img/service/style9/2.jpg';
import serviceImg3 from '../../../public/assets/img/service/style9/3.jpg';
import layerIcon from '../../../public/assets/img/service/style9/layer-icon.png';
import borderShape from '../../../public/assets/img/service/border-shape.png';

const Service = () => {

    return (
        <div id="rs-service" className="rs-services style7 pt-110 md-pt-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title6 mb-50 text-center"
                    subtitleClass="sub-text new-text"
                    subtitle="A full range of services to achieve your goals"
                    titleClass="title new-title"
                    title="Effective Growth Strategies, Converting Websites & Online Marketing."
                />
                <div className="animation-layer">
                    <div className="shape-layer">
                        <img 
                            className="dance2" 
                            src={layerIcon} 
                            alt="Images" 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <SingleServiceSix
                            itemClass="services-item"
                            serviceImg={serviceImg1}
                            Title="Web Development"
                            btnClass="services-btn3"
                            btnText="Learn More"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <SingleServiceSix
                            itemClass="services-item"
                            serviceImg={serviceImg2}
                            Title="App Development"
                            btnClass="services-btn3"
                            btnText="Learn More"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <SingleServiceSix
                            itemClass="services-item"
                            serviceImg={serviceImg3}
                            Title="Product Design"
                            btnClass="services-btn3"
                            btnText="Learn More"
                            Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms."
                        />
                    </div>
                </div>
                <div className="services-border pt-120 md-pt-70">
                    <img 
                        src={borderShape} 
                        alt="Images" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Service;