import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import SinglePricing from '../../components/Pricing/SinglePricing';
import Brand from '../../components/Common/Brand';

// Faq Image
import faqImage from '../../../public/assets/img/about/about-home.png';

// Pricing Image
import silverImg from '../../../public/assets/img/pricing/1.png';
import goldImg from '../../../public/assets/img/pricing/2.png';
import platinumImg from '../../../public/assets/img/pricing/3.png';

const FaqMain = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}
            <div className="rs-faq gray-bg pt-120 md-pb-394 pb-434 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-40 md-pr-14">
                            <div className="images-part">
                                <img
                                    src={faqImage}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <SectionTitle
                                sectionClass="sec-title2 mb-44"
                                subtitleClass="sub-text style-bg"
                                subtitle="Faqs"
                                titleClass="title title6"
                                title="Do You Have Any Questions?"
                            />
                            <Accordion className="accodion-style1" preExpanded={'b'}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Where should I incorporate my business?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Where should I incorporate my business?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How can I safely use cleaning chemicals?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What type of company is measured?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            {/* Faq Part End */}

            {/* Contact Part Start */}
            <div className="rs-contact style2 mt--314">
                <div className="container">
                    <div className="contact-box-wrap">
                        <SectionTitle
                            sectionClass="sec-title2 text-center mb-34"
                            subtitleClass="sub-text style-bg con-bg white-color"
                            subtitle="Contact"
                            titleClass="title testi-title white-color"
                            title="Request Free Consultation"
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
            {/* Contact Part End */}

            {/* Pricing Part Start */}
            <div className="rs-pricing style2 pt-120 pb-142 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-44"
                        subtitleClass="sub-text style-bg"
                        subtitle="Pricing"
                        titleClass="title title2"
                        title="Our Pricing Plan"
                    />
                    <div className="row">
                        <div className="col-lg-4">
                            <SinglePricing
                                itemClass="pricing-table"
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

                        <div className="col-lg-4 md-mt-30 md-mb-30">
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

                        <div className="col-lg-4">
                            <SinglePricing
                                itemClass="pricing-table"
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
            {/* Pricing Part End */}

            {/* brand-area-start */}
            <Brand />
            {/* brand-area-end */}
        </React.Fragment>
    )
}

export default FaqMain;





