import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import ResultFilters from './ResultFilters/ResultFilters';
import SearchResults from './SearchResults/SearchResults';

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchView">
                <DataTypeTabs></DataTypeTabs>
                <ResultFilters></ResultFilters>
                <SearchResults></SearchResults>
            </div>
        );
    }
}
 
export default SearchView;