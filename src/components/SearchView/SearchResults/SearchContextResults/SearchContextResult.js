import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        //console.log("SEARCH RESULT prop", this.props);
        return (
            <div className="searchContextResult">
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-6">
                            { this.props.resource_url ?
                                <a href={this.props.resource_url} target="_blank">
                                    <div className="contextResultLink">{this.props.title} </div>
                                </a>
                                :
                                <a href={`https://sbnarchivedemo.psi.edu/?identifier=${this.props.lid}`} target="_blank">
                                    <div className="contextResultLink">{this.props.title} </div>
                                </a>
                            }
                            
                            {/*
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </span>
                            */}
                        </p>
                        {/*<p className="subtitle is-6"></p>*/}
                    </div>
                    {/*
                    <footer className="card-footer">
                        <a href={`https://sbnarchivedemo.psi.edu/?dataset=${this.props.lid}`} target="_blank" className="card-footer-item">
                            <span>More</span>
                        </a>
                        <a className="card-footer-item">Search</a>
                    </footer>
                    */}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(SearchContextResult);