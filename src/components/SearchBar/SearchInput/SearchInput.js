import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchInput } from '../../../actions/searchInputAction';
 
class SearchInput extends Component {
    componentDidMount() {
    }

    state = {
        input: ''
    }

    handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    updateSearchInput = (e) => {
        this.props.updateSearchInput(this.state.input);
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
                    onClick={this.updateSearchInput}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    updateSearchInput: (input) => dispatch(updateSearchInput(input))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  