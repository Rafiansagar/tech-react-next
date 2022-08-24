import React, { Component, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleServiceNumber from '../../components/Service/ServiceNumber';


const Process = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div id="rs-portfolio" className="rs-process style4 pt-120 pb-120 md-pt-80 md-pb-70" style={{ 'background-image': 'url(assets/img/bg/steps-area.png)' }}>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <div className="container relative">
                <div className="sec-left">
                    <h2 className="title">Working Process</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 pr-30 md-pl-14 md-pb-100">
                        <div className="rs-step">
                            <div className="media-icon video-item">
                                <a className="popup-videos" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 pl-34 md-pl-14">
                        <div className="row">
                            <div className="col-md-6 mb-60">
                                <SingleServiceNumber
                                    itemClass="rs-addon-number"
                                    serviceNumber="1."
                                    Title="Discussion"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6 mb-60">
                                <SingleServiceNumber
                                    itemClass="rs-addon-number"
                                    serviceNumber="2."
                                    Title="Testing & Trying"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6 sm-mb-60">
                                <SingleServiceNumber
                                    itemClass="rs-addon-number"
                                    serviceNumber="3."
                                    Title="Ideas & Concepts"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6">
                                <SingleServiceNumber
                                    itemClass="rs-addon-number"
                                    serviceNumber="4."
                                    Title="Execute & install"
                                    Text="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh theo lacus egestas."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;