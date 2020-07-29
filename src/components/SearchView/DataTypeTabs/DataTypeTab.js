import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getDocumentSearchResults,
    getDataSearchResults,
    setDataType,
    setStart
} from '../../../actions/appAction';
import urlBuilder from '../../../utils/urlBuilder';
import { Button } from '@material-ui/core';
 
class DataTypeTab extends Component {
    componentDidMount() {
    }

    handleButtonClick = (e) => {
        e.preventDefault();

        this.props.dispatchSetStart(0);
        let state = {
            input: this.props.appReducer.searchInput,
            rows: this.props.appReducer.rows,
            start: 0,
            facets: this.props.appReducer.facets
        }

        if(this.props.title === "data"){
            this.props.dispatchSetDataType("data");
            this.props.dispatchGetDataSearchResults(state);
        }
        if(this.props.title === "documentation"){
            this.props.dispatchSetDataType("documentation");
            this.props.dispatchGetDocumentSearchResults(state);
        }

        this.props.history.push({
            pathname: '/',
            search: "?" + urlBuilder(this.props.appReducer, {dataType: this.props.title, start: 0})
        });
    }

    render() {
        let colorType = 'default';
        if(this.props.isActive){
            colorType = 'primary';
        }
        
        return (
            <Button
                variant="contained"
                onClick={this.handleButtonClick}
                color={colorType}
            >
                {this.props.title}
            </Button>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchSetDataType: (input) => dispatch(setDataType(input)),
    dispatchSetStart: (input) => dispatch(setStart(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(DataTypeTab);  