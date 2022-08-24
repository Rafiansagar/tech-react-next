import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HomeTwelveOnepageMain from './HomeTwelveOnepageMain';
import SearchModal from '../../components/Layout/Header/SearchModal';
import OnepageHeaderStyleThree from '../../components/Layout/Header/OnepageHeaderThree';

class HomeTwelveOnePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OnepageHeaderStyleThree 
                    item5='Testimonial'
                    item6='Process'
                />
                <HomeTwelveOnepageMain />
                <Footer
                    footerClass="rs-footer style1"
                />
                <SearchModal />
            </React.Fragment>
        );
    }
}

export default HomeTwelveOnePage;
