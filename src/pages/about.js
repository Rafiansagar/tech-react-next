import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SearchModal from '../components/Layout/Header/SearchModal';
import ScrollToTop from '../components/Common/ScrollTop';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import AboutMain from '../components/About/AboutMain';

// Breadcrumbs Background Image
import bannerbg from '../../public/assets/img/breadcrumbs/1.jpg';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Header
                    parentMenu='about'
                />
                <div>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb
                        pageTitle="About"
                        titleClass="page-title"
                        pageName="About"
                        breadcrumbsImg={bannerbg}
                    />
                    {/* breadcrumb-area-start */}

                    {/* About Main */}
                    <AboutMain />
                    {/* About Main */}

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

export default About;