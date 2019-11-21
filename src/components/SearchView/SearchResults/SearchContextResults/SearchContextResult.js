import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchContextResult">
                
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.props.title}</p>
                                <p className="subtitle is-6">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">More</a>
                        <a href="#" className="card-footer-item">Search</a>
                    </footer>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchContextResult);