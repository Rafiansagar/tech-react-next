import Link from 'next/link';

const WhyChooseUs = () => {

    return (
        <div className="rs-why-choose style3 pt-120 pb-120 md-pt-74 md-pb-80" style={{'background-image': 'url(assets/img/bg/choose-bg.jpg)'}}>
            <div className="container relative">
                <div className="sec-left">
                    <h2 className="title white-color">Why Choose Us</h2>
                </div>
                <div className="sec-right">
                    <h2 className="title white-color">Any Emergency</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 md-pb-30">
                        <div className="features-content">
                            <ul className="features-list">
                                <li>
                                    <i className="fa fa-check"></i>
                                    <span>Fast &amp; reliable support</span>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <span>Professional business repair services</span>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i><span>
                                    Recover data that may seem lost</span>
                                </li>
                                <li><i className="fa fa-check"></i><span>Quick Error Resolution</span></li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <span>Comprehensive data backup solutions</span>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i><span>
                                    Robust network planning &amp; design</span>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <span>Network infrastructure implementation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        <div className="features-wrap">
                            <h2 className="sub-title">CALL US 24/7</h2>
                            <h1 className="title">(+123) 456-9989</h1>
                            <div className="desc">
                                Have any idea or project for in your mind call us or schedule a appointment. Our representative will reply you shortly
                            </div>
                            <Link href="/contact">
                                <a className="readon learn-more learn-btn">Let's Talk</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;