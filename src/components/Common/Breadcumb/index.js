import React from 'react';
import Link from 'next/link';

const SiteBreadcrumb = (props) => {
	const { pageTitle, titleClass, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

	const breadcrumbsImgStyle = {
		backgroundImage: `url(${breadcrumbsImg})`
	}

	return (
		<div className="rs-breadcrumbs" style={breadcrumbsImgStyle}>
			<div className="container">
				<div className="breadcrumbs-inner text-center">
					<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
					<ul>
						<li>
							<Link href="/" as="/">
								<a className="active">{parentCategory ? parentCategory : 'Home'}</a>
							</Link>
						</li>
						{pageCategory ? 
							<>
								<li>
									<Link href="/" as="/">
										<a className="active">{pageCategory ? pageCategory : 'Category'}</a>
									</Link>
								</li> 
								<li>{pageName ? pageName : 'Page Name'}</li>
							</> : <li>{pageName ? pageName : 'Page Name'}</li>							
						}
						
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SiteBreadcrumb;




