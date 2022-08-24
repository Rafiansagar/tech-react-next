import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTenOnepageMain from './HomeTenOnepageMain';

class HomeTenOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OnepageHeader />
                <HomeTenOnepageMain />
                <Footer 
                    footerClass="rs-footer" 
                />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomeTenOnePage;
