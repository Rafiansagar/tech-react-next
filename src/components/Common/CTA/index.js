import React from 'react';
import Link from 'next/link';

function CTA(props) {
	const { ctaButtonLink } = props;

    return (
        <div className={props.ctaSectionClass}>
            <div className="container">
                <div className="cta-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-12 md-pr-0 pr-148 md-pl-15 md-mb-30 md-center">
                            <div className="title-wrap">
                                <h2 className={props.ctaTitleClass}>{props.ctaTitle}</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 text-righ">
                            <div className="button-wrapt md-center">
                                <Link href={ctaButtonLink ? ctaButtonLink : '#'}>
                                    <a className={props.ctaButtonClass}>{props.ctaButtonText}</a>
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