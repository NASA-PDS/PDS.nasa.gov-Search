import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchContextResult from './SearchContextResult';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    searchResultsList: {
        display: 'flex',
        margin: '0 0.5vw 0 0.5vw',
        padding: '2vh 0 2vh 0',
        overflow: 'auto'
    }
});

class SearchContextResults extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;

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
            <div className={classes.searchResultsList}>
                {searchContextResults}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(withStyles(useStyles)(SearchContextResults));  