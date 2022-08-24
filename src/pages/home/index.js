import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeMain from './HomeMain';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomePage;
