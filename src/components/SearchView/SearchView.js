import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <DataTypeTabs></DataTypeTabs>
            </div>
        );
    }
}
 
export default SearchView;