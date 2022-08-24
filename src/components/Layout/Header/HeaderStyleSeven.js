import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderStyleSeven = (props) => {
	const { parentMenu, secondParentMenu } = props;

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
				<header id="rs-header" className="rs-header style2">
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
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
											<div className="mobile-menu md-display-block">
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
											<nav className="rs-menu pr-90 lg-pr-50 md-pr-0 hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
													/>
												</ul>
											</nav>
										</div>
										<div className="expand-btn-inner search-icon hidden-md">
											<ul>
												<li className="sidebarmenu-search">
													<Link href="#" as="#">
														<a onClick={searchModalAdd} className="rs-search" href="#">
															<i><FontAwesomeIcon icon={['fas', 'search']} /></i>
														</a>
													</Link>
												</li>
												<li><a className="quote-btn hidden-lg" href="#">Get A Quote</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleSeven;