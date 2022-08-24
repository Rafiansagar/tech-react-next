import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';
// About Image Icons
import aboutImg from '../../../public/assets/img/about/about-7.png';

// Service Image Icons
import leftShapeImg from '../../../public/assets/img/service/shape-2.png';
import rightShapeImg from '../../../public/assets/img/service/shape-3.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about relative style3 pt-120 pb-120 md-pt-74 md-pb-80">
            <div className="container relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 pr-56 md-pl-14 md-mb-30">
                        <SectionTitle
                            sectionClass="sec-title mb-30 zIndex"
                            subtitleClass="sub-text"
                            subtitle="About Us"
                            titleClass="title title3 pb-30"
                            title="Braintech - IT Services and Gadgets Repair Since 1980"
                            descClass="desc pb-30"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                            secondDescClass="desc-part"
                            secondDescription="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying "
                        />
                        <div className="btn-part mt-40">
                            <Link href="/contact">
                                <a className="readon learn-more learn-btn">Learn More</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="home8-about zIndex">
                            <img 
                                src={aboutImg}
                                alt="images" 
                            />
                        </div>
                    </div>
                </div>
                <div className="sec-right">
                    <h2 className="title">40+ Years Experience</h2>
                </div>
            </div>
            <div className="shape-part">
                <div className="left-side">
                    <img 
                        src={leftShapeImg}
                        alt="" 
                    /> 
                </div>
                <div className="right-side">
                    <img 
                        src={rightShapeImg} 
                        alt="" 
                    /> 
                </div>
            </div>
        </div>
    );
}

export default About;