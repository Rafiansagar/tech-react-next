import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import OnepageMenuItems from './OnepageMenuItems';
import RSOnepageMobileMenu from './RSOnepageMobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OnepageHeaderStyleThree = (props) => {
    const { item1, item2, item3, item4, item5, item6, item7 } = props;

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
				<header id="rs-header" className="rs-header style4 modify1 header-transparent">
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container box-layout">
							<div className="row align-items-center">
								<div className="col-lg-2">
									<div className="logo-part hidden-md">
										<Link href="/" as="/">
											<a>
												<img src={require("../../../../public/assets/img/logo/logo.png")} alt="" />
											</a>
										</Link>
									</div>
								</div>
								<div className="col-xl-7 col-lg-8">
									<div className="rs-menu-area md-display-block">
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
											<nav className="rs-menu hidden-md">
												<ul className="nav-menu">
                                                    <OnepageMenuItems 
                                                        menuItem1={item1 ? item1 : 'Home'}
                                                        menuItem2={item2 ? item2 : ''}
                                                        menuItem3={item3 ? item3 : 'Services'}
                                                        menuItem4={item4 ? item4 : 'Project'}
                                                        menuItem5={item5 ? item5 : 'Team'}
                                                        menuItem6={item6 ? item6 : 'Blog'}
                                                        menuItem7={item7 ? item7 : 'Contact'}
                                                    />
												</ul>
											</nav>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-2">
									<div className="expand-btn-inner search-icon hidden-md">
										<ul>
											<li className="sidebarmenu-search">
												<Link href="#" as="#">
													<a onClick={searchModalAdd} className="rs-search" href="#">
														<i><FontAwesomeIcon icon={['fas', 'search']} /></i>
													</a>
												</Link>
											</li>
											<li>
												<i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i>
											</li>
											<li className="quote-btn pl-20 hidden-lg">
												<a href="#">Get A Quote</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSOnepageMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default OnepageHeaderStyleThree;