import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../components/Layout/Header/HeaderStyleFour';
import Footer from '../../components/Layout/Footer/Footer';
import HomeFiveMain from './HomeFiveMain';

class HomeFive extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <OffWrap />
                <HeaderStyleFour
                    parentMenu='home'
                    secondParentMenu='multipage'
                    headerClass='rs-header style3 modify2 header-transparent'
                    offCanvas='enable'
                />
                <HomeFiveMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeFive;