import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import ResultFilters from './ResultFilters/ResultFilters'; 

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <DataTypeTabs></DataTypeTabs>
                <ResultFilters></ResultFilters>
            </div>
        );
    }
}
 
export default SearchView;