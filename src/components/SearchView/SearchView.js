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
                    <div class="columns">
                        <div class="column is-narrow">
                            <SearchFacets></SearchFacets>
                        </div>
                        <div class="column">
                            <SearchResults></SearchResults>
                        </div>
                        <div class="column is-narrow">
                            <SearchContextResults></SearchContextResults>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchView;