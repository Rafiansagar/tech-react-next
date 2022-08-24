import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeEightOnepageMain from './HomeEightOnepageMain';

import footerLightLogo from '../../../public/assets/img/logo/white-logo.png';
class HomeEightOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OnepageHeader
                    item4='Process'
                    item5='Testimonial'
                />
                <HomeEightOnepageMain />
                <Footer
                    footerClass="rs-footer style2"
                    footerLogo={footerLightLogo}
                />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomeEightOnePage;
