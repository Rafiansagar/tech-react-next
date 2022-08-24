import React from 'react';
import HeaderStyleThree from '../../components/Layout/Header/HeaderStyleThree';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer/Footer';
import HomeFourMain from './HomeFourMain';

class HomeFour extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderStyleThree
                    parentMenu='home'
                    secondParentMenu='multipage'
                />
                <HomeFourMain />
                <Footer footerClass="rs-footer" />
                <SearchModal />
            </React.Fragment>
        );
    }
}


export default HomeFour;