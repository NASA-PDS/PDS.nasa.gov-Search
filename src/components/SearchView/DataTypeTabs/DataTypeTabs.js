import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTypeTab from './DataTypeTab';
import { Route } from 'react-router-dom'
 
class DataTypeTabs extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="dataTypeTabs">
                <Route path="/" render={(props) => 
                    <DataTypeTab
                        {...props}
                        title="data"
                        isActive={
                            this.props.appReducer.dataType === 'data'
                        }
                        isLeftmost={true}
                    />}
                />
                <Route path="/" render={(props) => 
                    <DataTypeTab
                        {...props}
                        title="documentation"
                        isActive={
                            this.props.appReducer.dataType === 'documentation'
                        }
                    />}
                />
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(DataTypeTabs);  