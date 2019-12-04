import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchResult">
                <Link to={`/details/${this.props.identifier}`}>
                    <div className="title is-5">{this.props.title}</div>
                </Link>
                <div className="subtitle is-6">{this.props.description}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchResult);