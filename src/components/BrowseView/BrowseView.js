import React, { Component } from 'react';
import LatestSection from './Sections/LatestSection';
import ProductLevelSection from './Sections/ProductLevelSection';
import MissionSection from './Sections/MissionSection';
import PopularSection from './Sections/PopularSection';
import TargetSection from './Sections/TargetSection';
import InstrumentSection from './Sections/InstrumentSection';

 
class BrowseView extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <LatestSection></LatestSection>
                <ProductLevelSection></ProductLevelSection>
                <MissionSection></MissionSection>
                <PopularSection></PopularSection>
                <TargetSection></TargetSection>
                <InstrumentSection></InstrumentSection>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default BrowseView;