import React, { Component } from 'react';
import LatestDropDown from '../DropDowns/LatestDropDown';
import DataItem from '../ItemList/DataItem';
 
class LatestSection extends Component {
    componentDidMount() {
    }

    render() {
        const items = [1,2,3,4,5];
        const latestItems = items.map((item, index) => 
            <DataItem key={index} {...item}></DataItem>
        );

        return (
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <LatestDropDown></LatestDropDown>
                        <div class="columns browsingList">
                            {latestItems}
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
 
export default LatestSection;