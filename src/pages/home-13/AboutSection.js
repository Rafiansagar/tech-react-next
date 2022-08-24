import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitleTwo';
// About Image Icons
import aboutImg from '../../../public/assets/img/about/1.png';
import effectImg from '../../../public/assets/img/about/2.png';

import titleBg from '../../../public/assets/img/icon/sob-bg.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style5 pt-120 pb-120 md-pt-80 md-pb-80" style={{'background-color': '#F5F6FE', 'opacity':' 0.8'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-50">
                        <div className="images-part">
                            <img 
                                src={aboutImg}
                                alt="images" 
                            />
                        </div>
                        <div className="about-animate">
                            <img 
                                className='dance'
                                src={effectImg}
                                alt="images" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-72 md-pl-14">
                        <div className="about-content">
                            <SectionTitle 
                                sectionClass='sec-title4 mb-44 md-mb-0'
                                logoClass='title-img'
                                titleIcon={titleBg}
                                subTitleClass='sub-title'
                                subtitle='Our Strategy'
                                titleClass='title testi-title'
                                title='We Build A Successful Brand Communication Strategy'
                                descClass='desc-part mb-44'
                                description='Perspiciatis unde omnis iste natus error sit voluptatem accus antium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ untur magni dolores eos qui ratione voluptatem the breakpoint for tablet voluptatem the devices. '
                            />
                            <div className="btn-part">
                                <Link href="/about">
                                    <a className="readon more-about">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;