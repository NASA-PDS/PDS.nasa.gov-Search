import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchFacetGroup extends Component {
    componentDidMount() {
    }

    render() {
        
        return (
            <div className="searchFacetGroup">
                <div className="searchFacetGroupTitle">{this.props.title}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchFacetGroup);  