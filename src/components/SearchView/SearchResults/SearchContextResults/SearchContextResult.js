import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchContextResult">
                <div className="searchResultTitle">{this.props.title}</div>
                <div className="searchResultDescription">{this.props.description}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchContextResult);