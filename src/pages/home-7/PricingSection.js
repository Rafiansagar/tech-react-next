import React, { Component } from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SinglePricing from '../../components/Pricing/SinglePricing';

// Pricing Image
import silverImg from '../../../public/assets/img/pricing/1.png';
import goldImg from '../../../public/assets/img/pricing/2.png';
import platinumImg from '../../../public/assets/img/pricing/3.png';


const Pricing = () => {
    return (
        <div className="rs-pricing style2 pt-110 pb-150 md-pt-74 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-30"
                    subtitleClass="sub-text"
                    subtitle="Pricing"
                    titleClass="title title5 pb-20"
                    title="Choose your pricing plan"
                />
                <div className="row">
                    <div className="col-lg-4 md-mb-50">
                        <SinglePricing
                            itemClass="pricing-table table-btn"
                            badge="Silver"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={silverImg}
                            currency="$"
                            price="29.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now table-btn"
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
                            itemClass="pricing-table table-btn"
                            badge="Gold"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={goldImg}
                            currency="$"
                            price="39.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now table-btn"
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
                            itemClass="pricing-table table-btn"
                            badge="Platinum"
                            badgeClass="pricing-badge secondary-bg"
                            pricingImage={platinumImg}
                            currency="$"
                            price="79.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now table-btn"
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