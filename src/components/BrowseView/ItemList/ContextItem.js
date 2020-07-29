import React, { Component } from 'react';
 
class ContextItem extends Component {
    componentDidMount() {
    }

    render() {
        let title = this.props.title;


        let description = this.props.description;
        if(description){
            description = description[0];
        }
        if(description && description.length > 50){
            description = description.substr(0, 200-1) + '...';
        }

        return (
            <div className="column">
                
                <div className="card contextCard">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{description}</p>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default ContextItem;