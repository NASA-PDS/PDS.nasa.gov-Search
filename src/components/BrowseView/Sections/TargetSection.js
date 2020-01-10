import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getTargetsSectionContent
} from '../../../actions/appAction';
import TargetDropDown from '../DropDowns/TargetDropDown';
import ContextItem from '../ItemList/ContextItem';
 
class TargetSection extends Component {
    componentDidMount() {
        this.props.dispatchGetTargetSectionContent(this.state)
    }

    render() {
        let items = [];
        if(this.props.appReducer.browserView &&
            this.props.appReducer.browserView.targets &&
            this.props.appReducer.browserView.targets.response &&
            this.props.appReducer.browserView.targets.response.docs){
                items = this.props.appReducer.browserView.targets.response.docs;
        }

        const targetItems = items.map((item, index) => 
            <ContextItem key={index} {...item}></ContextItem>
        );

        return (
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <TargetDropDown></TargetDropDown>
                        <div class="columns browsingList">
                            {targetItems}
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
    dispatchGetTargetSectionContent: (input) => dispatch(getTargetsSectionContent(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(TargetSection);