import React from 'react';
import Link from 'next/link';

const CTA = () => {

    return (
        <div className="rs-call-action style2 pb-100 pt-100 md-pt-70 md-pb-70" style={{'background-image': 'url(assets/img/bg/call-to-action3.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="action-wrap">
                            <h2 className="title">Let’s Start a Cool Project With Braintech</h2>
                            <div className="btn-part mt-36">
                                <Link href="/contact">
                                    <a className="readon started get-ready3">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;