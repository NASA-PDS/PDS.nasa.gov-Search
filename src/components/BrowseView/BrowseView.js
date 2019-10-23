import React, { Component } from 'react';

import logo from '../../assets/images/logo_nasa.png';
 
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
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default BrowseView;