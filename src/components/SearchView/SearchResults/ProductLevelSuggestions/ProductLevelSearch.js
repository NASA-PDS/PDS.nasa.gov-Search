import React, { Component } from 'react';
 
class ProductLevelSearch extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="productLevelCard">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                        </figure>
                    </div>
                    <div className="card-content">
                        <a href={this.props.url} target="_blank">
                            <div className="productLevelLink title is-7">{this.props.title} </div>
                        </a>
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