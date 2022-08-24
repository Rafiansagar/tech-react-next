import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProjectTwo from '../../components/Project/SingleProjectTwo';


import projectImg1 from '../../../public/assets/img/project/1.jpg';
import projectImg2 from '../../../public/assets/img/project/2.jpg';
import projectImg3 from '../../../public/assets/img/project/3.jpg';
import projectImg4 from '../../../public/assets/img/project/4.jpg';
import projectImg5 from '../../../public/assets/img/project/5.jpg';
import projectImg6 from '../../../public/assets/img/project/6.jpg';

function Project() {

    const options = {
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        center: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },
            1200: {
                items: 3,
                nav: false,
            },
            1366: {
                items: 3,
                nav: false,
            },
            1500: {
                items: 4,
                nav: true
            }
        }
    };

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-case-study">
                <div className="">
                    <div className="row margin-0 align-items-center">
                        <div className="col-lg-4 padding-0">
                            <div className="case-study" style={{'background-image': 'url(assets/img/bg/case-study.jpg)'}}>
                                <SectionTitle
                                    sectionClass="sec-title2 mb-30"
                                    subtitleClass="sub-text white-color"
                                    subtitle="Case Study"
                                    titleClass="title testi-title white-color pb-20"
                                    title="How braintech assist your business"
                                    descClass="desc-big"
                                    description="Bring to the table win-win survival strategies to dotted proactive domination. At the end of the going forward, a new normal that has evolved generation. "
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 padding-0">
                            <div className="case-study-wrap">
                                <div className="rs-project style3 modify1 mod md-pt-0">
                                    <OwlCarousel options={options} >
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg1} 
                                            Title="Growth Strategies"
                                            Category="IT Technology" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg2} 
                                            Title="Latform Integration"
                                            Category="IT Technology" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg3} 
                                            Title="Innovative Interfaces" 
                                            Category="IT Technology" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg4} 
                                            Title="Product Engineering"
                                            Category="IT Technology" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg5} 
                                            Title="Analytic Solutions"
                                            Category="IT Technology" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg6} 
                                            Title="Project Design"
                                            Category="IT Technology" 
                                        />
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project