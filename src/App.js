import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import BrowseView from './components/BrowseView/BrowseView';
import SearchView from './components/SearchView/SearchView';

import logo from './assets/images/logo_nasa.png';

class App extends Component {
  render() {
    const {appReducer} = this.props;

    return (
      <div className="App">
        <div className="header">
          <img src={logo} 
            className="headerLogo"
            alt=""
          />
          <SearchBar></SearchBar>
        </div>
        {appReducer.isSearching ? <SearchView></SearchView>: <BrowseView></BrowseView>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appReducer: state.appReducer
})

export default connect(mapStateToProps, null)(App);