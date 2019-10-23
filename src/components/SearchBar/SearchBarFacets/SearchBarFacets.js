import React, { Component } from 'react';
import SearchBarFacet from './SearchBarFacet';
 
class SearchBarFacets extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBarFacets">
                <SearchBarFacet title="Target"></SearchBarFacet>
                <SearchBarFacet title="Mission"></SearchBarFacet>
                <SearchBarFacet title="Instrument"></SearchBarFacet>
            </div>
        );
    }
}
 
export default SearchBarFacets;