import React, { Component } from 'react';

import logo from '../../assets/images/logo_pds.png';
 
class BrowseView extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Browse View Goes Here</h1>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default BrowseView;