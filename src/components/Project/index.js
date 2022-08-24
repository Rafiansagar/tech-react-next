import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../Common/SectionTitle';
import SingleProject from './SingleProject';


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
                nav: false,
                stagePadding: 0,
            },
            992: {
                items: 2,
                nav: false,
                stagePadding: 0,
            },
            1200: {
                items: 3,
                nav: true,
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
            <div id="rs-portfolio" className="rs-project style1 pt-110 md-pt-80 mb--150">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-44 md-mb-30"
                        subtitleClass="sub-text white-color"
                        subtitle="Project"
                        titleClass="title white-color"
                        title="We Are Offering All Kinds of IT Solutions Services"
                    />
                    <OwlCarousel options={options} >
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg1} 
                            Title="Innovative Interfaces" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg2} 
                            Title="Project Design" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg3} 
                            Title="Product Engineering" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg4} 
                            Title="Growth Strategies" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg5} 
                            Title="Innovative Interfaces" 
                            Category="IT Technology" 
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg6} 
                            Title="Platform Integration" 
                            Category="IT Technology" 
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project