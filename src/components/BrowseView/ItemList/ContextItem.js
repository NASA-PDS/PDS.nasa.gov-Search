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
                
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{description}</p>
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