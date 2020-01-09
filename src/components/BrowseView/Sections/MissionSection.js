import React, { Component } from 'react';
import MissionDropDown from '../DropDowns/MissionDropDown';
import ContextItem from '../ItemList/ContextItem';
 
class MissionSection extends Component {
    componentDidMount() {
    }

    render() {
        const items = [1,2,3,4,5];
        const missionItems = items.map((item, index) => 
            <ContextItem key={index} {...item}></ContextItem>
        );

        return (
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <MissionDropDown></MissionDropDown>
                        <div class="columns browsingList">
                            {missionItems}
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
 
export default MissionSection;