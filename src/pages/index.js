import React from 'react';
import HomePage from './home';

class Index extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>               
                <HomePage />
            </React.Fragment>
        );
    }
}


export default Index;

