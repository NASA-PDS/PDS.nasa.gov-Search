import React, { Component } from 'react';
import SearchFacet from './SearchFacet';
 
class SearchFacets extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <SearchFacet title="Target"></SearchFacet>
                <SearchFacet title="Mission"></SearchFacet>
                <SearchFacet title="Instrument"></SearchFacet>
            </div>
        );
    }
}
 
export default SearchFacets;