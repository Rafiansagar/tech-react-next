import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFive from '../../components/Layout/Header/HeaderStyleFive';
import Footer from '../../components/Layout/Footer/Footer';
import HomeSixMain from './HomeSixMain';

class HomeSix extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <OffWrap />
                <HeaderStyleFive
                    parentMenu='home'
                    secondParentMenu='multipage'
                    headerClass='rs-header style3 modify1 header-transparent'
                    offCanvas='enable'
                />
                <HomeSixMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeSix;