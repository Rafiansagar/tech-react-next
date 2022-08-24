import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../Common/SectionTitle';
import SingleTeam from './SingleTeam';


import teamImg1 from '../../../public/assets/img/team/1.jpg';
import teamImg2 from '../../../public/assets/img/team/2.jpg';
import teamImg3 from '../../../public/assets/img/team/3.jpg';

function Team() {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        center: true,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                stagePadding: 0,

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

    return (
        <React.Fragment>
            <div className="rs-team modify1 pt-120 pb-94 md-pt-80 md-pb-74">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-45"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Team"
                        titleClass="title white-color"
                        title="Who We Are"
                        effectClass="heading-line"
                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg1}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg2}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg3}
                                Title="Jenifar Lowry"
                                Designation="Web Developer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team