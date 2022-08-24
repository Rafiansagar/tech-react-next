import React from 'react';
import Link from 'next/link';

const CTA = () => {

    return (
        <div className="rs-call-action pb-100 pt-100 md-pt-70 md-pb-70" style={{ 'background-image': 'url(assets/img/bg/call-to-action2.jpg)', 'background-position': 'center center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="action-wrap">
                            <div className="icon-img">
                                <img src="assets/img/call-us/rocket.png" alt="Images" />
                            </div>
                            <h2 className="title">Let’s Start a Cool Project With <span className="watermark">Braintech</span></h2>
                            <div className="btn-part mt-43">
                                <Link href="/contact">
                                    <a className="readon started">Get Started</a>
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