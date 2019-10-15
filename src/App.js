import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BrowseView from './components/BrowseView/BrowseView';
import SearchView from './components/SearchView/SearchView';

class App extends Component {
  render() {
    const {appReducer} = this.props;

    return (
      <div className="App">
        <SearchBar></SearchBar>
        {appReducer.isSearching ? <SearchView></SearchView>: <BrowseView></BrowseView>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appReducer: state.appReducer
})

export default connect(mapStateToProps, null)(App);