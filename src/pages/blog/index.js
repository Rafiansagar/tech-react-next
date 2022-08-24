import React from 'react';
import Header from '../../components/Layout/Header/Header';
import BlogMain from '../../components/Blog';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import Footer from '../../components/Layout/Footer/Footer';
import ScrollToTop from '../../components/Common/ScrollTop';
import SearchModal from '../../components/Layout/Header/SearchModal';

// Breadcrumbs Background Image
import bannerbg from '../../../public/assets/img/breadcrumbs/4.jpg';

class Blog extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='blog'
                />
                <div>
                    <SiteBreadcrumb
                        pageTitle="Blog"
                        titleClass="page-title"
                        pageName="Blog"
                        breadcrumbsImg={bannerbg}
                    />

                    {/* Blog Main */}
                    <BlogMain />
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


export default Blog;

