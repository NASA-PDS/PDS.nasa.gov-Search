import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchContextResult">
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{this.props.title}</p>
                        <p className="subtitle is-6">{this.props.description}</p>
                    </div>
                    <footer className="card-footer">
                        <Link to={`/details/${this.props.identifier}`} className="card-footer-item">
                            <span>More</span>
                        </Link>
                        <a className="card-footer-item">Search</a>
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