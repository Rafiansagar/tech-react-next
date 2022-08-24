
import Link from 'next/link';

import SectionTitle from '../../components/Common/SectionTitle/SectionTitle';
import SingleServiceFive from '../../components/Service/SingleServiceFive';

// Service Icons
import imgMain1 from '../../../public/assets/img/service/style2/main-img/6.png';
import imgHover1 from '../../../public/assets/img/service/style2/hover-img/6.png';

import imgMain2 from '../../../public/assets/img/service/style2/main-img/1.png';
import imgHover2 from '../../../public/assets/img/service/style2/hover-img/1.png';

import imgMain3 from '../../../public/assets/img/service/style2/main-img/5.png';
import imgHover3 from '../../../public/assets/img/service/style2/hover-img/5.png';

import imgMain4 from '../../../public/assets/img/service/style2/main-img/2.png';
import imgHover4 from '../../../public/assets/img/service/style2/hover-img/2.png';

const ServiceTwo = () => {

    return (
        <div className="rs-services style3 modify2 pt-120 md-pt-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-50"
                    titleClass="title testi-title"
                    title="Creative Branding Strategy Services "
                    descClass="desc desc3"
                    description="Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                />
                <div className="row">
                    <div className="col-lg-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item light-purple-bg"
                            MainImg={imgMain1}
                            HoverImg={imgHover1}
                            Title="Digital Strategies"
                            Text="We denounce with righteous indignation & dislike men who are so beguiled to righteous demorlized. "
                            btnClass='d-none'
                        />
                    </div>
                    <div className="col-lg-6 mb-30">
                        <SingleServiceFive
                            itemClass="services-item light-purple-bg"
                            MainImg={imgMain2}
                            HoverImg={imgHover2}
                            Title="Brand Strategy"
                            Text="We denounce with righteous indignation & dislike men who are so beguiled to righteous demorlized. "
                            btnClass='d-none'
                        />
                    </div>
                    <div className="col-lg-6 md-mb-30">
                        <SingleServiceFive
                            itemClass="services-item light-purple-bg"
                            MainImg={imgMain3}
                            HoverImg={imgHover3}
                            Title="Brand Identity"
                            Text="We denounce with righteous indignation & dislike men who are so beguiled to righteous demorlized. "
                            btnClass='d-none'
                        />
                    </div>
                    <div className="col-lg-6">
                        <SingleServiceFive
                            itemClass="services-item light-purple-bg"
                            MainImg={imgMain4}
                            HoverImg={imgHover4}
                            Title="UI/UX Design"
                            Text="We denounce with righteous indignation & dislike men who are so beguiled to righteous demorlized. "
                            btnClass='d-none'
                        />
                    </div>
                </div>
                <div className="btn-part text-center mt-44">
                    <Link href="/about">
                        <a className="readon more-about">View More</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceTwo;