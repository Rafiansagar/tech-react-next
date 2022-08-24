import React from 'react';
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleTwo';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTwoMain from './HomeTwoMain';
import Footer from '../../components/Layout/Footer/Footer';

class HomeTwo extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeTwoMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeTwo;

