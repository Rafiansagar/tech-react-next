import React, { Component } from 'react';
import SinglePricing from '../../components/Pricing/SinglePricing';

// Pricing Image
import silverImg from '../../../public/assets/img/pricing/1.png';
import goldImg from '../../../public/assets/img/pricing/2.png';
import platinumImg from '../../../public/assets/img/pricing/3.png';


const Pricing = () => {
    return (
        <div className="rs-pricing pt-relative style2 modify1 pt-120 pb-150 md-pt-80 md-pb-80">
            <div className="container relative">
                <div className="sec-left">
                    <h2 className="title">Pricing Plan</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 md-mb-50">
                        <SinglePricing
                            itemClass="pricing-table new-style2"
                            badge="Silver"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={silverImg}
                            currency="$"
                            price="29.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now price"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="no"

                            featureText4="Support via E-mail and Phone"
                            ability4="no"
                        />
                    </div>

                    <div className="col-lg-4 md-mb-50">
                        <SinglePricing
                            itemClass="pricing-table light-gray-bg"
                            badge="Gold"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={goldImg}
                            currency="$"
                            price="39.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now price"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="yes"

                            featureText4="Support via E-mail and Phone"
                            ability4="no"
                        />
                    </div>

                    <div className="col-lg-4 md-mb-50">
                        <SinglePricing
                            itemClass="pricing-table new-style2"
                            badge="Platinum"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={platinumImg}
                            currency="$"
                            price="79.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now price"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="yes"

                            featureText4="Support via E-mail and Phone"
                            ability4="yes"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;