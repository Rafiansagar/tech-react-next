import SectionTitle from '../../components/Common/SectionTitle';

// Chooseus Images
import mainImg from '../../../public/assets/img/choose/1.png';
import animImg1 from '../../../public/assets/img/choose/dotted-1.png';
import animImg2 from '../../../public/assets/img/choose/dotted-2.png';
import iconOne from '../../../public/assets/img/choose/icons/1.png';
import iconTwo from '../../../public/assets/img/choose/icons/2.png';
import iconThree from '../../../public/assets/img/choose/icons/3.png';


const Chooseus = () => {

    return (
        <div className="rs-why-choose pt-120 pb-120 md-pt-74 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-pb-60">
                        <SectionTitle
                            sectionClass="sec-title mb-40"
                            subtitleClass="sub-text style4-bg"
                            subtitle="Why Choose Us"
                            titleClass="title pb-20"
                            title="We Create Result-Oriented Dynamic Applications"
                            descClass="desc"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                        />
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconOne}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">First Growing Process</a></h3>
                                <p className="services-txt">  At vero eos et accusamus etiusto odio praesentium.</p>
                            </div>
                        </div>
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconTwo}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Clean code</a></h3>
                                <p className="services-txt">  At vero eos et accusamus etiusto odio praesentium.</p>
                            </div>
                        </div>
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img
                                    src={iconThree}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Well Documentation</a></h3>
                                <p className="services-txt">  At vero eos et accusamus etiusto odio praesentium.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-part">
                            <img
                                src={mainImg}
                                alt="Main Image"
                            />
                        </div>
                        <div className="animation">
                            <div className="top-shape">
                                <img
                                    className="dance"
                                    src={animImg2}
                                    alt="Animation Two"
                                />
                            </div>
                            <div className="bottom-shape">
                                <img
                                    className="dance2"
                                    src={animImg1}
                                    alt="Animation One"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chooseus;