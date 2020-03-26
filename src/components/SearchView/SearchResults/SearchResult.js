import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        let searchResultClass = "searchResult";
        if(this.props.index === 0){
            searchResultClass = "searchResult first";
        }

        let timeStamp = this.props.timestamp;
        let targetIds = this.props.target_id;
        if(Array.isArray(targetIds)){
            targetIds = targetIds[targetIds.length - 1];
        }

        return (
            <div className={searchResultClass}>
               <a href={`https://sbnarchivedemo.psi.edu/?identifier=${this.props.lid}`} target="_blank">
                    <div className="title is-5 resultLink">{this.props.title}</div>
                </a>
                <div className="searchResultDetails">
                    <div>
                        <div><span className="searchResultDetailLabel">Investigation:</span> {this.props.investigation_id}</div>
                        <div><span className="searchResultDetailLabel">Target:</span> {targetIds}</div>
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