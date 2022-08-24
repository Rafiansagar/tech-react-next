import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SingleTeam from '../../components/Team/SingleTeam';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Bg
import breadcrumbsImg1 from '../../../public/assets/img/breadcrumbs/4.jpg';

// Team Images
import teamImg1 from '../../../public/assets/img/team/1.jpg';
import teamImg2 from '../../../public/assets/img/team/2.jpg';
import teamImg3 from '../../../public/assets/img/team/3.jpg';
import teamImg4 from '../../../public/assets/img/team/4.jpg';
import teamImg5 from '../../../public/assets/img/team/5.jpg';
import teamImg6 from '../../../public/assets/img/team/6.jpg';
import teamImg7 from '../../../public/assets/img/team/7.jpg';
import teamImg8 from '../../../public/assets/img/team/8.jpg';
import teamImg9 from '../../../public/assets/img/team/9.jpg';

function Team() {

    return (
        <React.Fragment>
            <Header
                parentMenu='page'
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Our Team"
                breadcrumbsImg={breadcrumbsImg1}
                pageName="Our Team"
            />
            {/* breadcrumb-area-start */}
            <div className="rs-team modify1 pt-120 pb-94 md-pt-80 md-pb-74">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg1}
                                teamURL="makhaia-antitni"
                                Title="Makhaia Antitni"
                                Designation="President & CEO"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg2}
                                teamURL="corey-anderson"
                                Title="Corey Anderson"
                                Designation="CEO & Founder"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg3}
                                teamURL="jenifar-lowry"
                                Title="Masud Rana"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg4}
                                teamURL="rafian-sagar"
                                Title="Rafian Sagar"
                                Designation="Digital Marketer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg5}
                                teamURL="israt-jahan"
                                Title="Israt Jahan"
                                Designation="Design Lead"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg6}
                                teamURL="abu-sayed"
                                Title="Abu Sayed"
                                Designation="App Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg7}
                                teamURL="sonia-akhter"
                                Title="Sonia Akhter"
                                Designation="Graphic Artist"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-50">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg8}
                                teamURL="rayhan-ali"
                                Title="Rayhan Ali"
                                Designation="Manager"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleTeam
                                itemClass="team-item-wrap"
                                teamImage={teamImg9}
                                teamURL="benjir-akther"
                                Title="Benjir Akther"
                                Designation="Graphic Designer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    )
}

export default Team