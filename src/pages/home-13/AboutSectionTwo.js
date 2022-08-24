
import SectionTitle from '../../components/Common/SectionTitle/SectionTitleTwo';
// About Image Icons
import aboutImg from '../../../public/assets/img/about/about-testing.png';

import whyIcon from '../../../public/assets/img/icon/why.png';

const About = () => {

    return (
        <div className="rs-about style4 pb-100 md-pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testing-img">
                            <img 
                                src={aboutImg}
                                alt="images" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-56 md-pl-14 md-pt-60">
                        <div className="about-content">
                            <SectionTitle 
                                sectionClass='sec-title5 mb-46'
                                titleIcon={whyIcon}
                                title={<>Easier and Faster Testing with <span>AI Testbot</span></>}
                            />
                            <ul className="rs-features-list">
                                <li><i className="fa fa-check"></i><span>Build at the speed of innovation </span></li>
                                <li><i className="fa fa-check"></i><span>Quick Results in 20 minutes</span></li>
                                <li><i className="fa fa-check"></i><span>No Coding, No Setup</span></li>
                                <li><i className="fa fa-check"></i><span>Drive Business Impact</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;