import React, { Component } from 'react';
import InstrumentDropDown from '../DropDowns/InstrumentDropDown';
import ContextItem from '../ItemList/ContextItem';
 
class InstrumentSection extends Component {
    componentDidMount() {
    }

    render() {
        const items = [1,2,3,4,5];
        const instrumentItems = items.map((item, index) => 
            <ContextItem key={index} {...item}></ContextItem>
        );

        return (
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <InstrumentDropDown></InstrumentDropDown>
                        <div class="columns browsingList">
                            {instrumentItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default InstrumentSection;