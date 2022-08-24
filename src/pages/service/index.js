import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceOneMain from '../../components/ServiceOne/ServiceOneMain';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';


class ServiceOne extends Component {

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
                        pageTitle="Services"
                        titleClass="page-title"
                        pageName="Services"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* ServiceOneMain */}
                    <ServiceOneMain />
                    {/* ServiceOneMain */}
                </div>
                <Footer />
                <SearchModal />
            </React.Fragment>

        );
    }
}


export default ServiceOne;