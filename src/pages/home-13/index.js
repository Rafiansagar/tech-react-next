import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../components/Layout/Header/HeaderStyleFour';
import Footer from '../../components/Layout/Footer/Footer';
import HomeThirteenMain from './HomeThirteenMain';

import logo from '../../../public/assets/img/logo/white-logo.png';

class HomeThirteen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OffWrap />
                <HeaderStyleFour
                    parentMenu='home'
                    secondParentMenu='multipage'
                    headerClass='rs-header style3 modify3 header-transparent'
                    headerNormalLogo={logo}
                    offCanvas='enable'
                />
                <HomeThirteenMain />
                <Footer />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeThirteen;