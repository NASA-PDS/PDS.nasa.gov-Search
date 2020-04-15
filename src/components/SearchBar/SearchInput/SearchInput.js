import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setSearchInput, 
    setIsSearching,
    setStart,
    getDataSearchResults,
    getContextSearchResults,
    getDocumentSearchResults,
    clearFacetValues
} from '../../../actions/appAction';
import urlBuilder from '../../../utils/urlBuilder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
class SearchInput extends Component {
    componentDidMount() {
        if(this.props.appReducer.searchInput){
            this.setState({
                isSearching: true
            }, () => {
                this.props.dispatchSetIsSearching(this.state.isSearching);

                let values = {
                    input: this.props.appReducer.searchInput,
                    start: this.props.appReducer.start,
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
            });
        }
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
        this.props.dispatchSetStart(0);
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

        this.props.history.push({
            pathname: '/',
            search: "?" + urlBuilder(this.props.appReducer, {start: 0})
        });
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
                    value={this.props.appReducer.searchInput}
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
    dispatchSetStart: (input) => dispatch(setStart(input)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input)),
    dispatchGetContextSearchResults: (input) => dispatch(getContextSearchResults(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchClearFacetValues: (input) => dispatch(clearFacetValues(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  