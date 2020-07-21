import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import BrowseView from './components/BrowseView/BrowseView';
import SearchView from './components/SearchView/SearchView';
import Footer from './components/Footer/Footer';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import logo from './assets/images/logo_nasa.png';

import {
  setSearchInput,
  setDataType,
  setFacetValue,
  setStart,
  getDataSearchResults
} from './actions/appAction';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  headerLogo: {
    maxHeight: "7vh"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    
    if(this.props.match.params){
      const urlParams = new URLSearchParams(this.props.location.search);

      const searchText = urlParams.get('search');
      if(searchText){
        this.props.dispatchSetSearchInput(searchText);
      }

      const start = urlParams.get('start');
      if(start){
        this.props.dispatchSetStart(start)
      }

      const dataType = urlParams.get('dataType');
      if(dataType){
        this.props.dispatchSetDataType(dataType);
      }

      const facetsText = urlParams.get('facets');
      if(facetsText){
        let facetStrings = facetsText.split(",");
        let facets = facetStrings.map((string) => {
          return {
            title: string.split(":")[0],
            value: string.split(":")[1]
          }
        });
        facets.forEach((facet) => {
          this.props.dispatchSetFacetValue({
            title: facet.title,
            value: facet.value
          });
        });
      }
        
    }
  }

  render() {
    const { classes } = this.props;
    const {appReducer} = this.props;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" aria-label="Nasa">
              <img 
                src={logo} 
                className={classes.headerLogo}
                alt=""
              />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Planetary Data System
            </Typography>

            {appReducer.isSearching ? <SearchBar></SearchBar> : ""}

          </Toolbar>
        </AppBar>

        {appReducer.isSearching ? <SearchView></SearchView>: <BrowseView></BrowseView>}

        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appReducer: state.appReducer
})

const mapDispatchToProps = dispatch => ({
  dispatchSetSearchInput: (input) => dispatch(setSearchInput(input)),
  dispatchSetDataType: (input) => dispatch(setDataType(input)),
  dispatchSetFacetValue: (input) => dispatch(setFacetValue(input)),
  dispatchSetStart: (input) => dispatch(setStart(input)),
  dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(App));