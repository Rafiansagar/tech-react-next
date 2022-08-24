import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeEightMain from './HomeEightMain';

import footerLightLogo from '../../../public/assets/img/logo/white-logo.png';

class HomeEight extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header 
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeEightMain/>
                <Footer
                    footerClass="rs-footer style2"
                    footerLogo={footerLightLogo}
                />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeEight;