import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getInstrumentsSectionContent
} from '../../../actions/appAction';
import InstrumentDropDown from '../DropDowns/InstrumentDropDown';
import ContextItem from '../ItemList/ContextItem';
 
class InstrumentSection extends Component {
    componentDidMount() {
        this.props.dispatchGetInstrumentsSectionContent(this.state)
    }

    render() {
        let items = [];
        if(this.props.appReducer.browserView &&
            this.props.appReducer.browserView.instruments &&
            this.props.appReducer.browserView.instruments.response &&
            this.props.appReducer.browserView.instruments.response.docs){
                items = this.props.appReducer.browserView.instruments.response.docs;
        }

        const instrumentItems = items.map((item, index) => 
            <ContextItem key={index} {...item}></ContextItem>
        );

        return (
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <InstrumentDropDown></InstrumentDropDown>
                        <div className="columns browsingList">
                            {instrumentItems}
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

const mapDispatchToProps = dispatch => ({
    dispatchGetInstrumentsSectionContent: (input) => dispatch(getInstrumentsSectionContent(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSection);