import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';
import ServiceTwoMain from '../../components/ServiceTwo/ServiceTwoMain';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';

class ServiceTwo extends Component {

    render() {

        return (
            <React.Fragment>
                <Header
                    parentMenu='page'
                    secondParentMenu='services'
                />
                <div>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb
                        pageTitle="Services 2"
                        titleClass="page-title"
                        pageName="Services 2"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* ServiceTwoMain */}
                    <ServiceTwoMain />
                    {/* ServiceTwoMain */}

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
                <Footer />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default ServiceTwo;