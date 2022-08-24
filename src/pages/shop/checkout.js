import React, { Component } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';
import CheckoutMain from '../../components/Shop/CheckoutMain';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/4.jpg';

class Checkout extends Component {
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
                        pageTitle="Checkout"
                        titleClass="page-title"
                        pageName="Checkout"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* CheckoutMain Main */}
                    <CheckoutMain />
                    {/* CheckoutMain Main */}

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

export default Checkout;