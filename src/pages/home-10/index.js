import React from 'react';
import HeaderStyleSeven from '../../components/Layout/Header/HeaderStyleSeven';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer/Footer';
import HomeTenMain from './HomeTenMain';

class HomeTen extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HeaderStyleSeven
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeTenMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeTen;