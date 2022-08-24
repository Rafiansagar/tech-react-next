import React from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle';

const CTA = () => {

    return (
        <div className="rs-call-action pt-120 pb-120 md-pt-74 md-pb-80" style={{'background-image': 'url(assets/img/bg/call-action.jpg)'}}>
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-text white-color"
                    subtitle="Let’s Talk"
                    titleClass="title title4 white-color"
                    title="We run add kinds of IT services that grow your success"
                />
                <div className="call-btn text-center mt-30">
                    <Link href="/contact">
                        <a className="readon discover started">Get Started</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CTA;