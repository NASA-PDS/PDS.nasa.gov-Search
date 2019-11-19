import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
 
class SearchBarFacet extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBarFacet">
                {this.props.title}
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        );
    }
}
 
export default SearchBarFacet;