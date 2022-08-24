import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../../public/assets/img/breadcrumbs/3.jpg';


class AnalyticSolutions extends Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='service'
                />
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    breadcrumbsImg={breadcrumbsImg}
                    pageTitle='Analytic Solutions'
                    pageCategory='Services'
                    pageName='Analytic Solutions'
                />
                {/* breadcrumb-area-end */}
                <ServiceDetailsContent />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default AnalyticSolutions;