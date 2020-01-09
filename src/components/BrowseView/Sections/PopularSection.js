import React, { Component } from 'react';
import PopularDropDown from '../DropDowns/PopularDropDown';
import ContextItem from '../ItemList/ContextItem'; 

class PopularSection extends Component {
    componentDidMount() {
    }

    render() {
        const items = [1,2,3,4,5];
        const popularItems = items.map((item, index) => 
            <ContextItem key={index} {...item}></ContextItem>
        );

        return (
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <PopularDropDown></PopularDropDown>
                        <div class="columns browsingList">
                            {popularItems}
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
 
export default PopularSection;