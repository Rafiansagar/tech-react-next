import React, { Component, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppointmentForm from '../Appointment/Appointment';

const BannerDefault = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style1">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
                <div className="banner-height pt-100 pb-100 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 pt-40 pr-140 md-pt-0 md-mb-60 md-pr-14"> 
                                <div className="banner-content">
                                    <h2 className="bnr-title">IT Consulting Services<br></br> For Your Business</h2>
                                    <p  className="bnr-desc">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                                    <div className="banner-video">
                                        <a className="popup-video" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 pl-70 lg-pl-30 md-pl-14">
                                <AppointmentForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerDefault;