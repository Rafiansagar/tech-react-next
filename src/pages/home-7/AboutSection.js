import Link from 'next/link';

import SectionTitle from '../../components/Common/SectionTitle';

// Service Image Icons
import roundImg from '../../../public/assets/img/about/round.png';
import aboutImg from '../../../public/assets/img/about/about1.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style3 pt-120 pb-120 md-pt-74 md-pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <SectionTitle
                            sectionClass="sec-title2 mb-30"
                            subtitleClass="sub-text"
                            subtitle="Our Company"
                            titleClass=" title title3 pb-20"
                            title="We’ve been triumphing all these 40 years."
                            descClass="desc desc2"
                            description="Bring to the table win-win survival strategies done to ensure dotted proactive domination. Customers we can for done working a new normal that has evolved from generation on the runway heading towards a streamlined. Now you will be able to insert any section template to your live site instantly. "
                        />
                        <div className="btn-part mt-40">
                            <Link href="/contact">
                                <a className="readon discover more">Learn More</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 md-pt-50">
                        <div className="rs-animation-image">
                            <div className="pattern-img">
                                <img 
                                    src={roundImg} 
                                    alt="" 
                                /> 
                            </div>
                            <div className="middle-img hidden-md">
                                <img 
                                    className="dance3" 
                                    src={aboutImg} 
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;