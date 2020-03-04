import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import SearchFacetGroup from '../SearchFacets/SearchFacetGroup';
import ProductLevelSuggestions from '../ProductLevelSuggestions/ProductLevelSuggestions';

class SearchResults extends Component {
    componentDidMount() {
    }

    render() {
        console.log("results", this.props);
        let results = [];
        if(this.props.appReducer.searchResults && 
            this.props.appReducer.searchResults.response &&
            this.props.appReducer.searchResults.response.docs){
                results = this.props.appReducer.searchResults.response.docs;
        }

        let searchResults = results.map((result, index) => 
            <SearchResult key={index} {...result} index={index}></SearchResult>
        );

        let facets = [];
        if(this.props.appReducer.searchResults &&
            this.props.appReducer.searchResults.facet_fields){
                
                this.props.appReducer.facets.forEach((facet, index) => {
                    let facetItems = this.props.appReducer.searchResults.facet_fields[facet.title];
                    facets.push(<SearchFacetGroup key={index} title={facet.title} facetItems={facetItems} value={facet.value}></SearchFacetGroup>);
                });
        } 

        if(results.length < 1){
            searchResults = <div className="noResultsMessage">No Results Found.</div>
        }
        
        return (
            <div className="searchResults">
                <div className="columns">
                    <div>
                        {facets}
                    </div>
                    <div>
                        {searchResults}
                    </div>
                    <div>
                        <ProductLevelSuggestions></ProductLevelSuggestions>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchResults);  