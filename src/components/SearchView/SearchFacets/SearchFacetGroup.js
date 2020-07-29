import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFacet from '../SearchFacets/SearchFacet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Route } from 'react-router-dom'
import urlBuilder from '../../../utils/urlBuilder';
import {
    getDataSearchResults,
    clearFacetValue
} from '../../../actions/appAction';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    redText: {
        color: '#FF0000'
    }
});

class SearchFacetGroup extends Component {
    componentDidMount() {
    }

    handleClearFacetValue = (e) => {
        e.preventDefault();
        this.props.dispatchClearFacetValue(this.props.title);
        
        let values = {
            input: this.props.appReducer.searchInput,
            start: 0,
            rows: this.props.appReducer.rows,
            facets: this.props.appReducer.facets
        }
        this.props.dispatchGetDataSearchResults(values);

        this.props.history.push({
            pathname: '/',
            search: "?" + urlBuilder(this.props.appReducer, {start: 0})
        });
    }

    render() {
        const { classes } = this.props;
        let facets = [];

        if(this.props.facetItems){
            facets = this.props.facetItems.map((facet, index) =>
                <Route path="/" render={(props) => <SearchFacet {...props} key={index} {...facet} index={index} title={this.props.title}></SearchFacet>}/>
            );
        }

        let facet = '';
        if(this.props.value && this.props.value !== ''){
            facet = <Typography>
                        <Box fontWeight="fontWeightBold">
                            {this.props.title}
                        </Box>
                        <Box component="span">
                           {this.props.value} &nbsp;
                        </Box>
                        <Box component="span"> 
                            <Box component="span" className={classes.redText}
                                onClick={this.handleClearFacetValue}
                            >
                                <FontAwesomeIcon icon={faWindowClose}/>
                            </Box>
                        </Box>
                    </Typography>
        }
        
        return (
            <div>
                { facet !== '' ? 
                    facet
                    :
                    facets.length > 0 ?
                    <div>
                        <Typography>
                            <Box fontWeight="fontWeightBold">
                            {this.props.title}
                            </Box>
                        </Typography>
                        <div>
                           {facets}
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchClearFacetValue: (input) => dispatch(clearFacetValue(input)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input))
});
 
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SearchFacetGroup));  