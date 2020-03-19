import React, { Component } from 'react';
import SearchBarFacets from './SearchBarFacets/SearchBarFacets';
import SearchInput from './SearchInput/SearchInput';
import { Route } from 'react-router-dom'
 
class SearchBar extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBar">
                <Route path="/" component={SearchInput}/>
                {/*<SearchBarFacets></SearchBarFacets>*/}
            </div>
        );
    }
}
 
export default SearchBar;  