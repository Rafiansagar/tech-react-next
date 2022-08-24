import React from 'react';
import Link from 'next/link';
import SectionTitle from '../../components/Common/SectionTitle/SectionTitleTwo';
import SingleProject from '../../components/Project/SingleProject';


import titleBg from '../../../public/assets/img/icon/sob-bg.png';

import projectImg1 from '../../../public/assets/img/project/style6/1.jpg';
import projectImg2 from '../../../public/assets/img/project/style6/2.jpg';
import projectImg3 from '../../../public/assets/img/project/style6/3.jpg';
import projectImg4 from '../../../public/assets/img/project/style6/4.jpg';

function Project() {

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style6 modify3 pt-120 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SectionTitle 
                                sectionClass='sec-title4 mb-44 md-mb-30 md-center'
                                logoClass='title-img'
                                titleIcon={titleBg}
                                subTitleClass='sub-title'
                                subtitle='Latest Project'
                                titleClass='title testi-title'
                                title='Branding Agency Case Studies'
                            />
                        </div>
                        <div className="col-lg-6 mb-30 md-mb-50 text-right md-text-left">
                            <div className="btn-part">
                                <Link href="/about">
                                    <a className="readon more-about">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg1} 
                                Title="Growth Strategies" 
                                Category="Application Testing" 
                            />
                        </div>
                        <div className="col-md-6 mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg2} 
                                Title="Product Design" 
                                Category="Application Testing" 
                            />
                        </div>                        
                        <div className="col-md-6 md-mb-40">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg3} 
                                Title="Analytic Solutions" 
                                Category="Application Testing" 
                            />
                        </div>
                        <div className="col-md-6">
                            <SingleProject 
                                itemClass="project-item"
                                projectImage={projectImg4} 
                                Title="Product Engineering" 
                                Category="Application Testing" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project