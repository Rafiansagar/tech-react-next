import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HomeElevenOnepageMain from './HomeElevenOnepageMain';
import SearchModal from '../../components/Layout/Header/SearchModal';
import OnepageHeaderStyleTwo from '../../components/Layout/Header/OnePageHeaderTwo';

import footerWhiteLogo from '../../../public/assets/img/logo/white-logo.png';

class HomeElevenOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="black-bg">
                    <OnepageHeaderStyleTwo />
                    <HomeElevenOnepageMain />
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

export default HomeElevenOnePage;
