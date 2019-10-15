import React, { Component } from 'react';
import DataTypeTab from './DataTypeTab';
 
class DataTypeTabs extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <DataTypeTab title="Data"></DataTypeTab>
                <DataTypeTab title="Documentation"></DataTypeTab>
                <DataTypeTab title="Node Search Engines"></DataTypeTab>
            </div>
        );
    }
}
 
export default DataTypeTabs;