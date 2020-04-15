import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
class MissionDropDown extends Component {
    componentDidMount() {
    }

    state = {
        selection: "",
        isOpen: false
    }

    openClicked = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    

    render() {
        let isActiveClass = "dropdown";
        if(this.state.isOpen){
            isActiveClass = "dropdown is-active"
        }

        return (
            <div className="has-text-centered browsing-drop-down">
                <div className={isActiveClass}>
                    <div className="dropdown-trigger" onClick={this.openClicked}>
                        <button className="button sectionDropDownButton" aria-haspopup="true" aria-controls="dropdown-menu2">
                        <span>Missions</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                            date selection goes here
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default MissionDropDown;