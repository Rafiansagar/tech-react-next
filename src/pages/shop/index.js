import React from 'react';
import ShopMain from './ShopMain';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/3.jpg';

class Shop extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='page'
                    secondParentMenu='shop'
                />
                <div>
                    <SiteBreadcrumb
                        pageTitle="Shop"
                        titleClass="page-title"
                        pageName="Products"
                        breadcrumbsImg={bannerbg}
                    />

                    {/* Blog Main */}
                    <ShopMain />
                    {/* Blog Main End */}

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


export default Shop;

