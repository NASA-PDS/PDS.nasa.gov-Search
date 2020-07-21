import React, { Component } from 'react';
import DataTypeTabs from './DataTypeTabs/DataTypeTabs'; 
import SearchFacets from './SearchFacets/SearchFacets';
import SearchResults from './SearchResults/SearchResults';
import SearchContextResults from './SearchResults/SearchContextResults/SearchContextResults';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    containerMargins: theme.containerMargins
});

class SearchView extends Component {
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        
        return (
            <Container className={classes.containerMargins}>
                <SearchContextResults></SearchContextResults>

                <DataTypeTabs></DataTypeTabs>

                <div className="searchResultsContainer">
                    <div className="columns">
                        <div className="">
                            <SearchResults></SearchResults>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
 
export default (withStyles(useStyles)(SearchView));