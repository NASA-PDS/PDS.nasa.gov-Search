import React, { Component } from 'react';
import SearchBarFacet from './SearchBarFacet';
import SearchBarTargetFacet from './SearchBarTargetFacet';
import SearchBarMissionFacet from './SearchBarMissionFacet';
import SearchBarInstrumentFacet from './SearchBarInstrumentFacet';
 
class SearchBarFacets extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBarFacets">
                <SearchBarTargetFacet></SearchBarTargetFacet>
                <SearchBarMissionFacet></SearchBarMissionFacet>
                <SearchBarInstrumentFacet title="Instrument"></SearchBarInstrumentFacet>
            </div>
        );
    }
}
 
export default SearchBarFacets;