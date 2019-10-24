import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import ResultFilters from './ResultFilters/ResultFilters';
import SearchFacets from './SearchFacets/SearchFacets';
import SearchResults from './SearchResults/SearchResults';
import SearchContextResults from './SearchResults/SearchContextResults/SearchContextResults';

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchView">
                <DataTypeTabs></DataTypeTabs>
                <ResultFilters></ResultFilters>
                <div className="searchResultsContainer">
                    <SearchFacets></SearchFacets>
                    <SearchResults></SearchResults>
                    <SearchContextResults></SearchContextResults>
                </div>
            </div>
        );
    }
}
 
export default SearchView;