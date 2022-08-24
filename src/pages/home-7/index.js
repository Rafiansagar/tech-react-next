import React from 'react';
import HeaderStyleSix from '../../components/Layout/Header/HeaderStyleSix';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer/Footer';
import HomeSevenMain from './HomeSevenMain';

class HomeSeven extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HeaderStyleSix
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeSevenMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeSeven;