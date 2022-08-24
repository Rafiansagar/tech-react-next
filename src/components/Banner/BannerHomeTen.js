import Link from 'next/link';

import bannerImg from '../../../public/assets/img/banner/banner-10.png';

const BannerHomeTen = () => {

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="banner-content">
                                <span className="sub-text">Technology & It Solutions</span>
                                <h1 className="title">Digital <span className="blue-color">Technology,<br></br></span><span className="pink-color"> It Solutions</span> & Services Around the World</h1>
                                <p className="desc">
                                    We are leading technology solutions proving company all over
                                    the world doing over 40 years. 
                                </p>
                                <div className="btn-part">
                                    <Link href="/about">
                                        <a className="readon started get-ready">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="images-part"> 
                    <img
                        src={bannerImg}
                        alt=""
                    />
                </div>
            </div> 
            {/* <!-- banner section end --> */}

        </React.Fragment>
    );
}

export default BannerHomeTen;