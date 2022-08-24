import React, { Component } from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SinglePricing from '../../components/Pricing/SinglePricing';

// Pricing Image
import silverImg from '../../../public/assets/img/pricing/1.png';
import goldImg from '../../../public/assets/img/pricing/2.png';
import platinumImg from '../../../public/assets/img/pricing/3.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Pricing = () => {
    return (
        <div className="rs-pricing gray-bg pt-120 pb-144">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-46"
                    subtitleClass="sub-text style-bg"
                    subtitle="Pricing"
                    titleClass="title title2"
                    title="Our Pricing Plan"
                />
                <div className="row">
                    <div className="col-lg-4 md-mb-50">
                        <SinglePricing
                            itemClass="pricing-table new-style2"
                            badge="Silver"
                            pricingImage={silverImg}
                            currency="$"
                            price="29.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
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
                            itemClass="pricing-table primary-bg"
                            badge="Gold"
                            pricingImage={goldImg}
                            currency="$"
                            price="39.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
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
                            pricingImage={platinumImg}
                            currency="$"
                            price="79.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
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