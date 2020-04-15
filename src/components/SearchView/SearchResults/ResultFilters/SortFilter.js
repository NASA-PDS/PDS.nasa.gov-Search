import React, { Component } from 'react';
 
class SortFilter extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="resultFilter">
                Sort by: <span className="sortByFilter">Relevance</span>
            </div>
        );
    }
}
 
export default SortFilter;