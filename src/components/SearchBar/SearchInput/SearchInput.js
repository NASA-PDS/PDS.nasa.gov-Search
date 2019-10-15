import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    updateSearchInput, 
    updateIsSearching 
} from '../../../actions/appAction';
 
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
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.handleInputChange}
                />
                <input 
                    type="button"
                    onClick={this.handleSearchButtonClick}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    dispatchSearchInput: (input) => dispatch(updateSearchInput(input)),
    dispatchIsSearching: (isSearching) => dispatch(updateIsSearching(isSearching))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  