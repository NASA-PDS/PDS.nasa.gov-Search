import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductLevelSearch from './ProductLevelSearch';

class ProductLevelSuggestions extends Component {
    componentDidMount() {
    }

    render() {
        let itemList = [
            {
                title: "Small Bodies"
            },
            {
                title: " Engineering "
            },
            {
                title: "Geosciences"
            }
        ];

        const productLevelSearches = itemList.map((item, index) => 
            <ProductLevelSearch key={index} {...item}></ProductLevelSearch>
        );

        return (
            <div>
                Continue Search In:
                <div class="productLevelSuggestionSection">
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