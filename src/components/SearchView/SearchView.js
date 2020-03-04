import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import ResultFilters from './ResultFilters/ResultFilters';
import SearchFacets from './SearchFacets/SearchFacets';
import SearchResults from './SearchResults/SearchResults';
import SearchContextResults from './SearchResults/SearchContextResults/SearchContextResults';
import SearchPagination from './SearchPagination/SearchPagination';

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchView">
                <SearchContextResults></SearchContextResults>

                <DataTypeTabs></DataTypeTabs>
                <ResultFilters></ResultFilters>

                <div className="searchResultsContainer">
                    <div className="columns">
                        <div className="">
                            <SearchResults></SearchResults>
                        </div>
                    </div>
                </div>

                <div>
                    {<SearchPagination></SearchPagination>}
                </div>

            </div>
        );
    }
}
 
export default SearchView;