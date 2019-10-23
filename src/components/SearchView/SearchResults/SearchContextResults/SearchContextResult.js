import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchContextResult">
                <b>{this.props.key} {this.props.title}</b>
                <br />
                {this.props.description}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchContextResult);