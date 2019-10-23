import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    updateSearchInput, 
    updateIsSearching,
    getSearchResults,
    getContextSearchResults
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
            input: e.target.value,
            isSearching: true
        }, () => {
            this.dispatchChange(this.state)
        });
    }

    handleSearchButtonClick = (e) => {
        e.preventDefault();

        this.setState({
            isSearching: true
        }, () => {
            this.dispatchChange(this.state)
        });
    }

    dispatchChange = (state) => {
        this.props.dispatchSearchInput(state.input);
        this.props.dispatchIsSearching(state.isSearching);
        this.props.dispatchGetSearchResults(state.input);
        this.props.dispatchGetContextSearchResults(state.input);
    }

    render() {
        return (
            <div className="search">
                <input 
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                    onChange={this.handleInputChange}
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
    dispatchSearchInput: (input) => dispatch(updateSearchInput(input)),
    dispatchIsSearching: (isSearching) => dispatch(updateIsSearching(isSearching)),
    dispatchGetSearchResults: (input) => dispatch(getSearchResults(input)),
    dispatchGetContextSearchResults: (input) => dispatch(getContextSearchResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  