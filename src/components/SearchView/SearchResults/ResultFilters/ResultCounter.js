import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
 
class ResultCounter extends Component {
    componentDidMount() {
    }
    render() {
        let startNumber = this.props.appReducer.start + 1;
        let endNumber = startNumber + this.props.appReducer.rows;
        if(this.props.appReducer.searchResults.response && this.props.appReducer.searchResults.response.docs){
            endNumber = startNumber + this.props.appReducer.searchResults.response.docs.length - 1;
        }
        let resultsCount = -1;
        if(this.props.appReducer.searchResults.response && this.props.appReducer.searchResults.response.numFound){
            resultsCount = this.props.appReducer.searchResults.response.numFound;
        }

        return (
            <Typography variant="h6">
                Showing {startNumber}-{endNumber} of {resultsCount} Results
            </Typography>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(ResultCounter);  