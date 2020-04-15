import React, { Component } from 'react';
 
class DataItem extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="column">
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="product level"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">Product Level</p>
                        <p className="subtitle is-6">{this.props.description}</p>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default DataItem;