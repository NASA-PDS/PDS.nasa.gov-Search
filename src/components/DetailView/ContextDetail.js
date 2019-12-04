import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class ContextDetail extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="hero contextDetail">
                <div className="contextDetail hero-body">
                    <div className="container has-text-centered">

                        <div className="card">
                            <div className="card-content">

                                <h1 className="title">
                                    {this.props.title}
                                </h1>
                                <h2 className="subtitle detailTitle">
                                    {this.props.citation_publication_year}
                                </h2>

                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{this.props.citation_author_list}</p>
                                        <p className="subtitle is-6">@{this.props.citation_author_list}</p>
                                    </div>
                                </div>

                                <div className="content">
                                    {this.props.description}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(ContextDetail);