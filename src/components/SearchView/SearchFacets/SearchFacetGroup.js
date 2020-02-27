import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFacet from '../SearchFacets/SearchFacet';

class SearchFacetGroup extends Component {
    componentDidMount() {
    }

    render() {
        let facets = [];
        console.log("facetItems", this.props.facetItems);

        if(this.props.facetItems){
            facets =this.props.facetItems.map((facet, index) =>
                <SearchFacet key={index} {...facet} index={index} parentTitle={this.props.title}></SearchFacet>
            );     
        }
        
        return (
            <div>
                { facets.length > 0 ? 
                    <div className="searchFacetGroup">
                        <div className="searchFacetGroupTitle">
                            {this.props.title}
                        </div>
                        <div>
                            {facets}
                        </div>
                    </div>
                    :
                    ""     
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchFacetGroup);  