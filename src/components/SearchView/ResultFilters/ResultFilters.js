import React, { Component } from 'react';
import ResultCounter from './ResultCounter';
import SortFilter from './SortFilter';
import DateFilter from './DateFilter';
 
class ResultFilters extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <ResultCounter></ResultCounter>
                <SortFilter></SortFilter>
                <DateFilter></DateFilter>
            </div>
        );
    }
}
 
export default ResultFilters;