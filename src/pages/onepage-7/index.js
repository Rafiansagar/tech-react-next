import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeSevenOnepageMain from './HomeSevenOnepageMain';

class HomeSevenOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OnepageHeader/>
                <HomeSevenOnepageMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomeSevenOnePage;
