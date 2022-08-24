import React, { Component } from 'react';
import SectionTitle from '../Common/SectionTitle';

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <div className={contactBoxClass ? contactBoxClass : 'contact-box'}>
            <SectionTitle
                sectionClass="sec-title mb-44"
                subtitleClass="sub-text new-text white-color"
                subtitle="Let's Talk"
                titleClass="title white-color"
                title="Speak With Expert Engineers."
            />
            <div className="address-box mb-24">
                <div className="address-icon">
                    <i className="fa fa-phone"></i>
                </div>
                <div className="address-text">
                    <span className="label">Phone:</span>
                    <a href="tel:123222-8888">(123) 222-8888</a>
                </div>
            </div>
            <div className="address-box mb-24">
                <div className="address-icon">
                    <i className="fa fa-home"></i>
                </div>
                <div className="address-text">
                    <span className="label">Email:</span>
                    <a href="mailto:support@website.com">support@website.com</a>
                </div>
            </div>
            <div className="address-box">
                <div className="address-icon">
                    <i className="fa fa-map-marker-alt"></i>
                </div>
                <div className="address-text">
                    <span className="label">Address:</span>
                    <div className="desc">New Jesrsy, 1201, USA</div>
                </div>
            </div>
        </div>
    );

}

export default ContactInfo;