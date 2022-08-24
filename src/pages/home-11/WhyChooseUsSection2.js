import SectionTitle from '../../components/Common/SectionTitle';
import AppointmentForm from '../../components/Appointment/Appointment';

// WhyChooseUs Images
import iconOne from '../../../public/assets/img/choose/icons/style2/1.png';
import iconTwo from '../../../public/assets/img/choose/icons/style2/2.png';
import iconThree from '../../../public/assets/img/choose/icons/style2/3.png';


const WhyChooseUs2 = () => {

    return (
        <div className="rs-why-choose style2 modify1 rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7 md-mb-30">
                        <SectionTitle
                            sectionClass="sec-title mb-40"
                            subtitleClass="sub-text white-color style4-bg left"
                            subtitle="Let's Talk"
                            titleClass="title white-color pb-20"
                            title="Speak With Expert Engineers."
                            descClass="desc white-color fixed-width"
                            description="From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. "
                        />
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconOne}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title white-color"><a href="#">Email</a></h3>
                                <p className="services-txt white-color">support@website.com</p>
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
                                <h3 className="title white-color"><a href="#">Call Us</a></h3>
                                <p className="services-txt white-color">(+01) 555 - 9811 - 444</p>
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
                                <h3 className="title white-color"><a href="#">Office Address</a></h3>
                                <p className="services-txt white-color">374 FA Tower, William S Blvd <br></br>2721, IL, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="rs-contact mod1 zIndex1">   
                            <AppointmentForm 
                                formTitle="Schedule Appointment"
                                formBtnClass="submit-btn orange-btn"
                            />
                        </div>
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

export default WhyChooseUs2;