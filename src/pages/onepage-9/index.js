import React from 'react';
import OnepageHeader from '../../components/Layout/Header/OnepageHeader';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeNineOnepageMain from './HomeNineOnepageMain';

class HomeNineOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OnepageHeader
                    item5='Testimonial'
                />
                <HomeNineOnepageMain />
                <Footer />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomeNineOnePage;
