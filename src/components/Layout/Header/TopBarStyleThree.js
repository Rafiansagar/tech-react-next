import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeaderStyleThree = () => {

    return (
        <div className="topbar-area style3 hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="topbar-contact">
                            <li>   
                                <i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>
                                <Link href="mailto:support@website.com" as="mailto:support@website.com">
                                    <a>support@website.com</a>
                                </Link>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={['far', 'phone']} /></i>
                                <Link href="tel:++1(990)999–5554" as="tel:++1(990)999–5554">
                                    <a>+1 (990) 999–5554</a>
                                </Link>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={['far', 'map-marker-alt']} /></i>
                                05 kandi BR. New York
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-right">
                        <div className="toolbar-sl-share">
                            <ul>
                                <li className="opening"> <em>
                                    <i className="far fa-clock"></i> 08:00am-6:00pm</em>
                                </li>
                                <li>
                                    <Link href="#" as="#">
                                        <a><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" as="#">
                                        <a><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" as="#">
                                        <a><i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" as="#">
                                        <a><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeaderStyleThree;