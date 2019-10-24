import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFacetGroup from './SearchFacetGroup';

class SearchFacets extends Component {
    componentDidMount() {
    }

    render() {
        let searchFacetGroupsData = [
            {
                title: "Domain",
                facets: ["Magnetosphere", "Surface", "Interior", "Heliosphere", "Atmosphere"]
            },
            {
                title: "Level",
                facets: ["Derived", "Raw", "Calibration", "Partial", "Process"]
            },
            {
                title: "Purpose",
                facets: ["Science", "Engineering", "Geometrical", "Observation", "Calibration", "Nagivation"]
            }
        ];

        const searchFacetGroups = searchFacetGroupsData.map((searchFacetGroup, index) => 
            <SearchFacetGroup key={index} {...searchFacetGroup}></SearchFacetGroup>
        );
        
        return (
            <div className="searchFacets">
                {searchFacetGroups}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchFacets);  