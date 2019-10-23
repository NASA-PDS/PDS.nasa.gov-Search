import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchResult">
                <b>{this.props.key} {this.props.title}</b>
                <br />
                {this.props.description}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchResult);