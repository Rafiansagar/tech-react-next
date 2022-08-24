import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProject from '../../components/Project/SingleProject';


import projectImg1 from '../../../public/assets/img/project/1.jpg';
import projectImg2 from '../../../public/assets/img/project/2.jpg';
import projectImg3 from '../../../public/assets/img/project/3.jpg';
import projectImg4 from '../../../public/assets/img/project/4.jpg';
import projectImg5 from '../../../public/assets/img/project/5.jpg';
import projectImg6 from '../../../public/assets/img/project/6.jpg';

function Project() {

    const options = {
        items: 3,
        nav: true,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                stagePadding: 0,
                nav:true,
            },
            992: {
                items: 2,
                stagePadding: 0,
            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style2 bg1 pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Projects"
                        titleClass="title title2 white-color"
                        title="Our Recent Launched Projects Available into Market"
                    />
                    <OwlCarousel options={options} >
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg1} 
                            Title="Growth Strategies"
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg2} 
                            Title="Latform Integration"
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg3} 
                            Title="Innovative Interfaces" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg4} 
                            Title="Product Engineering"
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg5} 
                            Title="Analytic Solutions"
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg6} 
                            Title="Project Design"
                            Category="IT Technology" 
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project