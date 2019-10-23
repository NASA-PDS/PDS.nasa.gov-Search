import React, { Component } from 'react';
 
class DataTypeTab extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <button className="button dark">{this.props.title}</button>
            </div>
        );
    }
}
 
export default DataTypeTab;