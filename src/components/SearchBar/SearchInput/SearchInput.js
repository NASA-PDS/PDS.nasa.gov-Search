import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setSearchInput, 
    setIsSearching,
    getDataSearchResults,
    getContextSearchResults,
    getDocumentSearchResults,
    clearFacetValues
} from '../../../actions/appAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import searchIcon from '../../../assets/images/search_icon_darkgrey@2x.png';
 
class SearchInput extends Component {
    componentDidMount() {
    }

    state = {
        input: '',
        isSearching: false
    }

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({
            input: e.target.value
        }, () => {
            this.props.dispatchSetSearchInput(this.state.input);
        });
    }

    handleSearchButtonClick = (e) => {
        e.preventDefault();

        this.setState({
            isSearching: true
        }, () => {
            this.doSearch()
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.setState({
                isSearching: true
            }, () => {
                this.doSearch();
            });
        }   
    }

    doSearch = () => {
        this.props.dispatchSetIsSearching(this.state.isSearching);
        this.props.dispatchClearFacetValues();

        let values = {
            input: this.props.appReducer.searchInput,
            start: 0,
            rows: this.props.appReducer.rows,
            facets: this.props.appReducer.facets
        }

        if(this.props.appReducer.dataType === "data"){
            this.props.dispatchGetDataSearchResults(values);
        }
        else if(this.props.appReducer.dataType === "documentation"){
            this.props.dispatchGetDocumentSearchResults(values);
        }

        this.props.dispatchGetContextSearchResults(this.props.appReducer.searchInput);
    }

    render() {
        return (
            <div className="search">
                <input 
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button 
                    className="searchButton"
                    type="button"
                    onClick={this.handleSearchButtonClick}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchSetSearchInput: (input) => dispatch(setSearchInput(input)),
    dispatchSetIsSearching: (isSearching) => dispatch(setIsSearching(isSearching)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input)),
    dispatchGetContextSearchResults: (input) => dispatch(getContextSearchResults(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchClearFacetValues: (input) => dispatch(clearFacetValues(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  