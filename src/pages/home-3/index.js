import React from 'react';
import HeaderStyleThree from '../../components/Layout/Header/HeaderStyleThree';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer/Footer';
import HomeThreeMain from './HomeThreeMain';

class HomeThree extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleThree
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeThreeMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeThree;