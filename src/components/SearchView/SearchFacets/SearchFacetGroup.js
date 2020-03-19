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
        let facets = [];

        if(this.props.facetItems){
            facets = this.props.facetItems.map((facet, index) =>
                <Route path="/" render={(props) => <SearchFacet {...props} key={index} {...facet} index={index} title={this.props.title}></SearchFacet>}/>
            );
        }

        let facet = '';
        if(this.props.value && this.props.value !== ''){
            facet = <div className="searchFacetGroup">
                        <div className="searchFacetGroupTitle">
                            {this.props.title}
                        </div>
                        <div>
                            <span>
                                {this.props.value}
                            </span>
                            <span
                                onClick={this.handleClearFacetValue}
                            >
                                <FontAwesomeIcon icon={faWindowClose}/>
                            </span>
                        </div>
                     </div>
        }
        
        return (
            <div>
                { facet !== '' ? 
                    facet
                    :
                    facets.length > 0 ?
                    <div className="searchFacetGroup">
                        <div className="searchFacetGroupTitle">
                            {this.props.title}
                        </div>
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
 
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchFacetGroup);  