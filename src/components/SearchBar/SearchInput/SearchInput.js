import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setSearchInput, 
    setIsSearching,
    getDataSearchResults,
    getContextSearchResults,
    getDocumentSearchResults
} from '../../../actions/appAction';

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

        let values = {
            input: this.props.appReducer.searchInput,
            start: this.props.appReducer.start,
            rows: this.props.appReducer.rows
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
                    <img src={searchIcon}/>
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
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  