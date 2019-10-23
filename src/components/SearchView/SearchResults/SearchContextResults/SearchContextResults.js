import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchContextResult from './SearchContextResult';

class SearchContextResults extends Component {
    componentDidMount() {
    }

    render() {
        console.log("results", this.props);
        let docs = [];
        if(this.props.appReducer.searchContextResults && 
            this.props.appReducer.searchContextResults.response &&
            this.props.appReducer.searchContextResults.response.docs){
                docs = this.props.appReducer.searchContextResults.response.docs;
        }

        const searchContextResults = docs.map((doc, index) => 
            <SearchContextResult key={index} {...doc}></SearchContextResult>
        );
        
        return (
            <div className="searchContextResults">
                {searchContextResults}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(SearchContextResults);  