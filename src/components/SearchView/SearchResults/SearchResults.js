import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import SearchFacetGroup from '../SearchFacets/SearchFacetGroup';
import ProductLevelSuggestions from './ProductLevelSuggestions/ProductLevelSuggestions';
import SearchPagination from './SearchPagination/SearchPagination';
import ResultFilters from './ResultFilters/ResultFilters';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    fullHeight: {
        height: "100vh"
    }
});

class SearchResults extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        let results = [];
        if(this.props.appReducer.searchResults && 
            this.props.appReducer.searchResults.response &&
            this.props.appReducer.searchResults.response.docs){
                results = this.props.appReducer.searchResults.response.docs;
        }

        let searchResults = results.map((result, index) => 
            <SearchResult key={index} {...result} index={index}></SearchResult>
        );

        let facets = [];
        if(this.props.appReducer.searchResults &&
            this.props.appReducer.searchResults.facet_fields){
                
                this.props.appReducer.facets.forEach((facet, index) => {
                    let facetItems = this.props.appReducer.searchResults.facet_fields[facet.title];
                    let facetGroup = <Route path="/" render={(props) => 
                        <SearchFacetGroup {...props} key={index} title={facet.title} facetItems={facetItems} value={facet.value}/>
                    }/>;
                    facets.push(facetGroup);
                });
        } 
        
        return (
            <div className="searchResults">
                {results.length < 1? 
                    <div className={classes.fullHeight}>
                        <div>No Results Found.</div>
                        <div>
                            Try your search for "{this.props.appReducer.searchInput}" again in one of these more specific searches.
                        </div>
                    </div>
                    :
                    <Grid container>
                        <Grid item sm={3}>
                            <div>
                                <Typography variant="h6">
                                    <FontAwesomeIcon icon={faSlidersH}/> Filters
                                </Typography>
                                {facets}
                            </div>
                        </Grid>
                        <Grid item sm={9}>
                            <ResultFilters></ResultFilters>
                                {searchResults}
                            <Route path="/" component={SearchPagination}/>
                        </Grid>
                    </Grid>
                }
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(withStyles(useStyles)(SearchResults));  