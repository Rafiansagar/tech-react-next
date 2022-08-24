import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SearchModal from '../components/Layout/Header/SearchModal';
import ScrollToTop from '../components/Common/ScrollTop';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import FaqMain from '../components/Faq';

// Breadcrumbs Background Image
import bannerbg from '../../public/assets/img/breadcrumbs/3.jpg';

class Faq extends Component {

    render() {

        return (
            <React.Fragment>
                <Header
                    parentMenu='page'
                />
                <div>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb
                        pageTitle="Faq"
                        titleClass="page-title"
                        pageName="Faq"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* Faq */}
                    <FaqMain />
                    {/* Faq */}

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


export default Faq;