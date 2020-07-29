import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setStart,
    getDataSearchResults
} from '../../../../actions/appAction';
import urlBuilder from '../../../../utils/urlBuilder';
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
 
const useStyles = (theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
});

class SearchInput extends Component {
    componentDidMount() {
    }

    handlePaginationButtonClick = (event, value) => {
        console.log("event", event);
        console.log("value", value);

        let newStart = (value  - 1) * this.props.appReducer.rows;

        this.props.dispatchSetStart(newStart);
        
        this.props.dispatchGetDataSearchResults({
            input: this.props.appReducer.searchInput, 
            start: newStart,
            rows: this.props.appReducer.rows,
            facets: this.props.appReducer.facets
        });

        this.props.history.push({
            pathname: '/',
            search: "?" + urlBuilder(this.props.appReducer, {start: newStart})
        });
    }

    render() {
        const { classes } = this.props;

        let start = 0;
        let rows = 0;
        let numFound = 0;

        start = this.props.appReducer.start;
        rows = this.props.appReducer.rows;

        if(this.props.appReducer.searchResults && this.props.appReducer.searchResults.response){
            if(this.props.appReducer.searchResults.response.numFound){
                numFound = this.props.appReducer.searchResults.response.numFound;
            }
        }

        let paginations = Math.ceil(numFound / rows);
        let centerPagination = start/rows + 1;

        return (
                <Pagination
                    className={classes.root}
                    count={paginations} 
                    page={centerPagination} 
                    color="primary" 
                    onChange={this.handlePaginationButtonClick}
                />
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchSetStart: (input) => dispatch(setStart(input)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SearchInput));