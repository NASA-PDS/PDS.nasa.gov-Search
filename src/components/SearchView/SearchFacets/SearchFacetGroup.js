import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchFacetGroup extends Component {
    componentDidMount() {
    }

    render() {
        
        return (
            <div className="panel-block">
                {this.props.title}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchFacetGroup);  