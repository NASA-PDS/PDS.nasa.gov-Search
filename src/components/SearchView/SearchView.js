import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import SearchFacets from './SearchFacets/SearchFacets';
import SearchResults from './SearchResults/SearchResults';
import SearchContextResults from './SearchResults/SearchContextResults/SearchContextResults';
import { Route } from 'react-router-dom';

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchView">
                <SearchContextResults></SearchContextResults>

                <DataTypeTabs></DataTypeTabs>

                <div className="searchResultsContainer">
                    <div className="columns">
                        <div className="">
                            <SearchResults></SearchResults>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default SearchView;