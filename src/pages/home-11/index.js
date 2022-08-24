import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../components/Layout/Header/HeaderStyleFour';
import Footer from '../../components/Layout/Footer/Footer';
import HomeElevenMain from './HomeElevenMain';

import footerWhiteLogo from '../../../public/assets/img/logo/white-logo.png';

class HomeEleven extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="black-bg">
                    <OffWrap />
                    <HeaderStyleFour
                        parentMenu='home'
                        secondParentMenu='multipage'
                        headerClass='rs-header style3 modify2 header-transparent'
                        offCanvas='enable'
                    />
                    <HomeElevenMain />
                    <Footer
                        footerLogo={footerWhiteLogo}
                        footerClass="rs-footer style2 modify1 black-dark"
                    />
                    <SearchModal />
                </div>
            </React.Fragment>
        );
    }
}


export default HomeEleven;