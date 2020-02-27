import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getDataSearchResults,
    getDocumentSearchResults,
    setFacetValue
} from '../../../actions/appAction';

class SearchFacet extends Component {
    componentDidMount() {
    }

    handleFacetClick = (e) => {
        let facetValue = e.currentTarget.getAttribute('data-value');
        let facetTitle = e.currentTarget.getAttribute('data-title');

        this.props.dispatchSetFacetValue({
            value: facetValue,
            title: facetTitle
        });

        let values = {
            input: this.props.appReducer.searchInput,
            start: 0,
            rows: this.props.appReducer.rows,
            facets: this.props.appReducer.facets
        }

        console.log("get search with these values", values);

        if(this.props.appReducer.dataType === "data"){
            this.props.dispatchGetDataSearchResults(values);
        }

        //change facet value in memory
        //do search 

        //the pagination should pick up on facet change
        //search input should clear the facet value as it is a new search
        //the data type should clear the facet value as it is new search    
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchFacet">
                <div
                    className="searchFacetTitle"
                    data-value={this.props.value}
                    data-title={this.props.parentTitle}
                    onClick={this.handleFacetClick}
                >
                    {this.props.value}
                </div>
                <div className="searchFacetDescription">{this.props.count}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchSetFacetValue: (input) => dispatch(setFacetValue(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFacet);