import React from 'react';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleEight from '../../components/Layout/Header/HeaderStyleEight';
import Footer from '../../components/Layout/Footer/Footer';
import HomeTwelveMain from './HomeTwelveMain';


class HomeTwelve extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleEight
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeTwelveMain />
                <Footer
                    footerClass="rs-footer style1"
                />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeTwelve;