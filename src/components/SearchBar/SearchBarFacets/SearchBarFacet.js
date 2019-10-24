import React, { Component } from 'react';
 
class SearchBarFacet extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBarFacet">
                {this.props.title}
            </div>
        );
    }
}
 
export default SearchBarFacet;