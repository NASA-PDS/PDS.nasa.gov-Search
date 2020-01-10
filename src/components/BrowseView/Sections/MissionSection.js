import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getMissionsSectionContent
} from '../../../actions/appAction';
import MissionDropDown from '../DropDowns/MissionDropDown';
import ContextItem from '../ItemList/ContextItem';
 
class MissionSection extends Component {
    componentDidMount() {
        this.props.dispatchGetMissionSectionContent(this.state)
    }

    render() {
        let items = [];
        if(this.props.appReducer.browserView &&
            this.props.appReducer.browserView.missions &&
            this.props.appReducer.browserView.missions.response &&
            this.props.appReducer.browserView.missions.response.docs){
                items = this.props.appReducer.browserView.missions.response.docs;
        }
        
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

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchGetMissionSectionContent: (input) => dispatch(getMissionsSectionContent(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionSection);