import React from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitle';

const CTA = () => {

    return (
        <div className="rs-call-action pb-70 pt-70" style={{'background-image': 'url(assets/img/bg/cta-bg13.jpg)', 'background-repeat': 'no-repeat', 'background-position': 'center center', 'background-size': 'cover'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <SectionTitle
                            sectionClass="sec-title3 md-mb-30"
                            subtitleClass="sub-text style2"
                            subtitle="Let's Chat"
                            titleClass="title title2"
                            title="Have a Project, Let's Start Today."
                        />
                    </div>
                    <div className="col-lg-5 text-right md-text-left">
                        <div className="btn-part">
                            <Link href="/contact">
                                <a className="readon more-about">Contact Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;