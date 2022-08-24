import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import TeamDetailsMain from './TeamDetailsMain';
import CTA from '../../components/Common/CTA';

// Breadcrumbs Bg
import breadcrumbsImg1 from '../../../public/assets/img/breadcrumbs/4.jpg';

class TeamDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='page'
                />
                <div>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb
                        pageTitle="Team Details"
                        pageCategory="IT Technology"
                        pageName="Corey Anderson"
                        breadcrumbsImg={breadcrumbsImg1}
                    />
                    {/* breadcrumb-area-start */}
                    {/* Price Main */}
                    <TeamDetailsMain />
                    {/* Price Main */}

                    {/* newsletter-area-start */}
                    <CTA
                        ctaSectionClass="rs-cta style1 cta-bg1 pt-70 pb-70"
                        ctaTitleClass="epx-title"
                        ctaTitle="Grow Your Business and Build Your Website or Software With us."
                        ctaButtonClass="readon learn-more"
                        ctaButtonLink="#"
                        ctaButtonText="Get In Touch"
                    />
                    {/* newsletter-area-end */}

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default TeamDetails;