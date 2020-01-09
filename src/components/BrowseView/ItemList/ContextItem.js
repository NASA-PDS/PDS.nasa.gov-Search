import React, { Component } from 'react';
 
class ContextItem extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="column">
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">Context</p>
                        <p className="subtitle is-6">{this.props.description}</p>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">More</a>
                    </footer>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default ContextItem;