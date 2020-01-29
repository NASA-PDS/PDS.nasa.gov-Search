import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getDocumentSearchResults,
    getSearchResults
} from '../../../actions/appAction';
 
class DataTypeTab extends Component {
    componentDidMount() {
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        let state = {
            input: this.props.appReducer.searchInput,
            rows: this.props.appReducer.rows,
            start: this.props.appReducer.start
        }

        if(this.props.title === "Data"){
            this.props.dispatchGetSearchResults(state);
        }
        if(this.props.title === "Documentation"){
            this.props.dispatchGetDocumentSearchResults(state);
        }
        
    }

    render() {
        return (
            <div>
                <button 
                    className="button dark dataTabButton"
                    onClick={this.handleButtonClick}
                >
                    {this.props.title}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchGetSearchResults: (input) => dispatch(getSearchResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(DataTypeTab);  