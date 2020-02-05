import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getDocumentSearchResults,
    getDataSearchResults,
    setDataType
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
            this.props.dispatchSetDataType("data");
            this.props.dispatchGetDataSearchResults(state);
        }
        if(this.props.title === "Documentation"){
            this.props.dispatchSetDataType("documentation");
            this.props.dispatchGetDocumentSearchResults(state);
        }
        
    }

    render() {
        let dataTypeTabClass = "button dark dataTabButton";
        if(this.props.isActive){
            dataTypeTabClass = "button dark dataTabButton dataTypeTabActive"
        }
        
        return (
            <div>
                <button 
                    className={dataTypeTabClass}
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
    dispatchSetDataType: (input) => dispatch(setDataType(input)),
    dispatchGetDocumentSearchResults: (input) => dispatch(getDocumentSearchResults(input)),
    dispatchGetDataSearchResults: (input) => dispatch(getDataSearchResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(DataTypeTab);  