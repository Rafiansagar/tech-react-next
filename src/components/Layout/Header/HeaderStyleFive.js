import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';
import CanvasMenu from './CanvasMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderStyleFive = (props) => {
	const { headerClass, parentMenu, secondParentMenu, offCanvas } = props;

	const [menuOpen, setMenuOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const canvasMenuAdd = () => {
		document.body.classList.add('nav-expanded');
	};
	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	return (
		<React.Fragment>
			<Head>
				<title>Braintech – React Next IT Solutions and Technology Startup Template</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/img/fav.png" />
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
			</Head>
			<div className="full-width-header">
				<header id="rs-header" className={headerClass ? headerClass : 'rs-header style3 header-transparent'}>
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container-fluid">
							<div className="row align-items-center">
								<div className="col-lg-3">
									<div className="logo-part hidden-md">
										<Link href="/" as="/">
											<a>
												<img src={require("../../../../public/assets/img/logo/logo.png")} alt="" />
											</a>
										</Link>
									</div>
								</div>
								<div className="col-lg-9 text-right md-text-left">
									<div className="rs-menu-area">
										<div className="main-menu">
											<div className="mobile-menu fixed-width md-display-block">
												<Link href="/" as="/">
													<a className="logo"><img src={require("../../../../public/assets/img/logo/logo.png")} alt="logo" /></a>
												</Link>
												<Link href="#" as="#">
													<a className="rs-menu-toggle primary" onClick={() => {
														setMenuOpen(!menuOpen)
													}}>
														<i><FontAwesomeIcon icon={['far', 'bars']} /></i>
													</a>
												</Link>
											</div>
											<nav className="rs-menu pr-70 lg-pr-30 md-pr-0 hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
													/>
												</ul>
											</nav>
										</div>
										<div className="expand-btn-inner search-icon hidden-md">
											{
												offCanvas ?
													<ul>
														<li className="sidebarmenu-search">
															<Link href="#" as="#">
																<a onClick={searchModalAdd} className="rs-search" href="#">
																	<i><FontAwesomeIcon icon={['fas', 'search']} /></i>
																</a>
															</Link>
														</li>
														<li>
															<Link href="#" as="#">
																<a onClick={canvasMenuAdd} id="nav-expander" className="humburger nav-expander">
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
															</Link>
														</li>
													</ul> :
													<ul>
														<li className="sidebarmenu-search">
															<Link href="#" as="#">
																<a onClick={searchModalAdd} className="hidden-xs rs-search" href="#">
																	<i><FontAwesomeIcon icon={['fas', 'search']} /></i>
																</a>
															</Link>
														</li>
													</ul>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				</header>
				<CanvasMenu />
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleFive;