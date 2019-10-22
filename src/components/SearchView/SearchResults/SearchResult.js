import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        console.log("SEARCH RESULT prop", this.props);
        return (
            <div>
                {this.props.key} {this.props.title}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchResult);