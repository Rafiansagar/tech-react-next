import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import canvasLogo from '../../../../public/assets/img/logo/logo.png';

const CanvasMenu = () => {

	const canvasMenuRemove = () => {
		document.body.classList.remove('nav-expanded');
	};

	return (
		<React.Fragment>
			<nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <div className="nav-link">
                        <a onClick={canvasMenuRemove} id="nav-close" className="humburger nav-expander" href="#">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                            <span className="dot3"></span>
                            <span className="dot4"></span>
                            <span className="dot5"></span>
                            <span className="dot6"></span>
                            <span className="dot7"></span>
                            <span className="dot8"></span>
                            <span className="dot9"></span>
                        </a>
                    </div>
                </div>
                <div className="canvas-logo">
                    <Link href="/"><img src={canvasLogo} alt="logo" /></Link>
                </div>
                <div className="offcanvas-text">
                    <p>Braintech quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio data center.</p>
                </div>
                <div className="canvas-contact">
                    <div className="address-area">
                        <div className="address-list">
                            <div className="info-icon">
                                <i><FontAwesomeIcon icon={['far', 'map-marker-alt']} /></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Address</h4>
                                <em>05 kandi BR. New York</em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Email</h4>
                                <em><a href="mailto:support@website.com">support@website.com</a></em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i><FontAwesomeIcon icon={['far', 'phone']} /></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Phone</h4>
                                <em>+019988772</em>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
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
            </nav>
		</React.Fragment>
	);
}

export default CanvasMenu;