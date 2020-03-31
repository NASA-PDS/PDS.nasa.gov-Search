import React, { Component } from 'react';
 
class ProductLevelSearch extends Component {
    componentDidMount() {
    }

    render() {
        let title = this.props.title;

        return (
            <div className="productLevelCard">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-7">{title}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default ProductLevelSearch;