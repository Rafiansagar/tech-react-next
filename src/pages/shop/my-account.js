import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import AccountMain from '../../components/Shop/AccountMain';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/2.jpg';

class MyAccount extends Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='page'
                    secondParentMenu='shop'
                />
                <div>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb
                        pageTitle="My Account"
                        titleClass="page-title"
                        pageName="My Accpunt"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* AccountMain Main */}
                    <AccountMain />
                    {/* AccountMain Main */}

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

export default MyAccount;