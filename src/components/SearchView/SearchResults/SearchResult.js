import React, { Component } from 'react';
import { connect } from 'react-redux';

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
               <a href={`https://sbnarchivedemo.psi.edu/?identifier=${this.props.lid}`} target="_blank">
                    <div className="title is-5 resultLink">{this.props.title}</div>
                </a>
                
                <div><span className="searchResultDetailLabel"></span>{this.props.timestamp}</div>
                <div className="searchResultDetails">
                    <div>
                        <div><span className="searchResultDetailLabel">Investigation:</span> {this.props.investigation_id}</div>
                        <div><span className="searchResultDetailLabel">Target:</span> {this.props.target_id}</div>
                        <div><span className="searchResultDetailLabel">Instrument:</span> {this.props.instrument_id}</div>
                    </div>
                    <div className="searchResultDetailsRightColumn">
                        <div><span className="searchResultDetailLabel">Purpose:</span> {this.props.purpose}</div>
                        <div><span className="searchResultDetailLabel">Data Type:</span> {this.props.collection_type}</div>
                        <div><span className="searchResultDetailLabel">Processing Level:</span> {this.props.processing_level}</div>
                    </div>
                </div>
                <div className="subtitle is-6">{this.props.description}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchResult);