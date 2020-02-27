import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import SearchFacetGroup from '../SearchFacets/SearchFacetGroup';

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
                    facets.push(<SearchFacetGroup key={index} title={facet.title} facetItems={facetItems}></SearchFacetGroup>);
                    /*
                    if(this.props.appReducer.searchResults.facet_fields[facet.title]){     
                        let facetResults = this.props.appReducer.searchResults.facet_fields[facet.title].map((facet, index) =>
                            <SearchFacet key={index} {...facet} index={index}></SearchFacet>
                        );
                    }
                    */

                });
        }

        console.log("facets", facets);

       


        /*
        let facets = [];
        if(this.props.appReducer.searchResults && 
            this.props.appReducer.searchResults.facet_fields &&
            this.props.appReducer.searchResults.facet_fields &&
            this.props.appReducer.searchResults.facet_fields.science_facets){
                facets = this.props.appReducer.searchResults.facet_fields.science_facets;
        }

         let facetResults = facets.map((facet, index) =>
            <SearchFacet key={index} {...facet} index={index}></SearchFacet>
        );
        */

        



        //for each facet in app reducer check if it exists in results.
          //if it does then get the list of results and create searchFacet for each one. 
          //put each of those in a list of facets for that title.
        
        //show each list on the left. 
        
        //make sure each searchFacet has a title value
        //when clicked get that title value and value and then change it in the state.

        //do a search 
          //for each set value in the state, make sure to add ff.title=value to the search url.
        
       

        if(results.length < 1){
            searchResults = <div className="noResultsMessage">No Results Found.</div>
        }
        
        return (
            <div className="searchResults">
                <div className="columns">
                    <div>
                        {/*facetResults.length > 0 ?
                            <div className="facetsTitle">
                                Science:
                            </div>
                            <div>
                                {facetResults}
                            </div>
                            
                        */
                       facets}
                    </div>
                    <div>
                        {searchResults}
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