import React from 'react';
import ShopDetailsMain from './ShopDetails';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';

const ShopSingle = () => {
    
    return (
        <React.Fragment>

            <Header 
                parentMenu = 'page'
                secondParentMenu = 'shop'
            />

            <SiteBreadcrumb
                pageTitle="Digital CC Camera"
                titleClass="page-title new-title pb-10"
                pageCategory="Product"
                pageName="Product Details"
                breadcrumbsImg={bannerbg}
            />

            {/* Shop Main */}
            <ShopDetailsMain />
            {/* Shop Main End */}

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer />

            <SearchModal />
        </React.Fragment>
    );
}


export default ShopSingle;

