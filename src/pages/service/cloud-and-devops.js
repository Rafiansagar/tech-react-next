import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../../public/assets/img/breadcrumbs/4.jpg';


class cloudAndDevops extends Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='service'
                />
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    breadcrumbsImg={breadcrumbsImg}
                    pageTitle='Cloud and Devops'
                    pageCategory='Services'
                    pageName='Cloud and Devops'
                />
                {/* breadcrumb-area-end */}
                <ServiceDetailsContent />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default cloudAndDevops;