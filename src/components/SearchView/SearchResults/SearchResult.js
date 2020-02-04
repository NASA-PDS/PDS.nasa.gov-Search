import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        var searchResultClass = "searchResult";
        if(this.props.index === 0){
            searchResultClass = "searchResult first";
        }

        return (
            <div className={searchResultClass}>
               <a href={`https://sbnarchivedemo.psi.edu/?dataset=${this.props.lid}`} target="_blank">
                    <div className="title is-5 resultLink">{this.props.title}</div>
                </a>
                <div className="subtitle is-6">{this.props.description}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchResult);