import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
class SearchBarFacet extends Component {
    componentDidMount() {
    }

    state = {
        selection: "",
        isOpen: false
    }

    openClicked = (e) => {
        e.preventDefault();
        console.log("open clicked");

        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));

        console.log("this.state", this.state);
    }

    

    render() {
        let isActiveClass = "dropdown";
        if(this.state.isOpen){
            isActiveClass = "dropdown is-active"
        }

        return (
            <div >
                <div className={isActiveClass}>
                    <div className="dropdown-trigger" onClick={this.openClicked}>
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                        <span>{this.props.title}</span>:
                        <span>{this.state.selection}</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-small" type="text" placeholder={this.props.title}/>
                                    <span class="icon is-left">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                            <hr className="dropdown-divider"/>

                            {this.props.title === "Target" ? <div>
                                <div className="dropdown-item">
                                    <p>Earth</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Mars</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Jupiter</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Moon</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Saturn</p>
                                </div> 
                            </div> : "" }

                            {this.props.title === "Mission" ? <div>
                                <div className="dropdown-item">
                                    <p>Cassini</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>ISS</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Voyager</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Mars 2020</p>
                                </div>
                                <div className="dropdown-item">
                                    <p>Insight</p>
                                </div>
                            </div>: "" }

                            {this.props.title === "Instrument" ? <div>
                            <div className="dropdown-item">
                                <p>CRaTER</p>
                            </div>
                            <div className="dropdown-item">
                                <p>TWINS</p>
                            </div>
                            <div className="dropdown-item">
                                <p>MAG</p>
                            </div>
                            <div className="dropdown-item">
                                <p>LROC</p>
                            </div>
                            <div className="dropdown-item">
                                <p>TWINS</p>
                            </div>`
                            </div>: "" }
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default SearchBarFacet;