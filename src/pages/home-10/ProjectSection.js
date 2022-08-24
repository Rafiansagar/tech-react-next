import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProject from '../../components/Project/SingleProject';

import projectImg1 from '../../../public/assets/img/project/style4/1.jpg';
import projectImg2 from '../../../public/assets/img/project/style4/2.jpg';
import projectImg3 from '../../../public/assets/img/project/style4/3.jpg';
import projectImg4 from '../../../public/assets/img/project/style4/4.jpg';

function Project() {

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style6 modify2 gray-bg pt-90 pb-100 md-pt-74 md-pb-80">
                <div className="container">
                    <SectionTitle 
                        sectionClass="sec-title2 text-center mb-44"
                        subtitleClass="sub-text gold-color"
                        subtitle="Our Project"
                        titleClass="title title7"
                        title="Our Latest Projects"
                    />
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