import React, { Component } from 'react';
import SearchFacets from './SearchFacets/SearchFacets';
import SearchInput from './SearchInput/SearchInput';
 
class SearchBar extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <SearchInput></SearchInput>
                <SearchFacets></SearchFacets>
            </div>
        );
    }
}
 
export default SearchBar;  