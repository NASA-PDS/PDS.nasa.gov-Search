import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTypeTab from './DataTypeTab';
 
class DataTypeTabs extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="dataTypeTabs">
                <DataTypeTab
                    title="Data"
                    isActive={
                        this.props.appReducer.dataType === 'data'
                    }
                >
                </DataTypeTab>
                <DataTypeTab
                    title="Documentation"
                    isActive={
                        this.props.appReducer.dataType === 'documentation'
                    }
                >
                </DataTypeTab>
                <DataTypeTab
                    title="Node Search Engines"
                    isActive={
                        this.props.appReducer.dataType === 'nodes'
                    }
                >
                </DataTypeTab>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(DataTypeTabs);  