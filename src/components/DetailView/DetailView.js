import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import ProductDetail from './ProductDetail';
import ContextDetail from './ContextDetail';

import logo from '../../assets/images/logo_nasa.png';
 
class DetailView extends Component {
    componentDidMount() {
    }

    render() {
        console.log("detail for:", this.props.match.params.identifier);
        console.log("detail view props", this.props);

        var result = this.props.appReducer.searchResults.response.docs.filter( result => result.identifier === this.props.match.params.identifier);
        var contextResult = this.props.appReducer.searchContextResults.response.docs.filter( result => result.identifier === this.props.match.params.identifier);

        console.log("detail result", result);
        console.log("context detail result", contextResult);

        return (
            <div className="App">
                <div className="header">
                    <img src={logo} 
                        className="headerLogo"
                        alt=""
                    />
                    <div className="headerTitle">
                        Planetary Data System
                    </div>
                </div>

                {result.length > 0 ? 
                    <ProductDetail {...result[0]}></ProductDetail>
                    :
                    <ContextDetail {...contextResult[0]}></ContextDetail>
                }
                

                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(DetailView);