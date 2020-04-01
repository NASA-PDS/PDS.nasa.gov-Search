import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductLevelSearch from './ProductLevelSearch';

class ProductLevelSuggestions extends Component {
    componentDidMount() {
    }

    render() {
        let itemList = [
            {
                title: "Small Bodies",
                url: "https://pdssbn.astro.umd.edu/data_sb/by_mission.shtml"
            },
            {
                title: "Engineering",
                url: "https://pds-engineering.jpl.nasa.gov/user/login?destination=node/1"
            },
            {
                title: "Geosciences",
                url: "https://pds-geosciences.wustl.edu/dataserv/default.htm"
            }
        ];

        const productLevelSearches = itemList.map((item, index) => 
            <ProductLevelSearch key={index} {...item}></ProductLevelSearch>
        );

        return (
            <div>
                <div className="productLevelSuggestionSection">
                    {productLevelSearches}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(ProductLevelSuggestions);  