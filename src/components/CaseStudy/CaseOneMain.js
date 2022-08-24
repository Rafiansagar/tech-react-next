import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CaseOne extends Component {

    render() {

        return (
            <React.Fragment>

                {/* <!-- cta-area-start --> */}
                <div className="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="cta-text mb-30">
                                    <span>do you have any project ?</span>
                                    <h1>Let’s Talk About Business Soluations With Us</h1>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-button text-lg-right mb-30">
                                    <a className="btn btn-white btn-none" href="#"><span className="btn-text">contact us <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
                                    <a className="btn btn-white btn-none btn-margin" href="#"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fal', 'long-arrow-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- cta-area-end --> */}
            </React.Fragment>
        );
    }
}

export default CaseOne;