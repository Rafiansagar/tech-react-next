import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../components/Layout/Header/HeaderStyleFour';
import Footer from '../../components/Layout/Footer/Footer';
import HomeNineMain from './HomeNineMain';

import logo from '../../../public/assets/img/logo/logo.png';

class HomeNine extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OffWrap />
                <HeaderStyleFour
                    parentMenu='home'
                    secondParentMenu='multipage'
                    headerClass='rs-header style3 modify1 header-transparent'
                    headerNormalLogo={logo}
                    mobileNormalLogo={logo}
                    offCanvas='enable'
                    primaryMenuToggle='enable'
                />
                <HomeNineMain />
                <Footer />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeNine;