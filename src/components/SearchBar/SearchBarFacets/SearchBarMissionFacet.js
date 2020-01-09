import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getSearchBarMissionFacetResults
} from '../../../actions/appAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
class SearchBarMissionFacet extends Component {
    componentDidMount() {
    }

    state = {
        selection: "",
        searchInput: null,
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

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({
            searchInput: e.target.value
        }, () => {
            this.props.dispatchSearchBarMissionFacetChange(this.state)
        });
    } 

    handleFacetResultClick = (e) => {
        this.setState({
            selection: e.target.getAttribute("data-value"),
            isOpen: false
        }, () => {
            //send out the search with this facet selected
        });
    }

    render() {
        let isActiveClass = "dropdown";
        if(this.state.isOpen){
            isActiveClass = "dropdown is-active"
        }

        console.log("mission facet app reducer", this.props.appReducer);
        let docs = [];
        if(this.props.appReducer.searchFacets &&
            this.props.appReducer.searchFacets.mission &&
            this.props.appReducer.searchFacets.mission.results.response &&
            this.props.appReducer.searchFacets.mission.results.response.docs){
                docs = this.props.appReducer.searchFacets.mission.results.response.docs;
        }

       const searchResults = docs.map((doc, index) =>
            <div 
                className="dropdown-item" 
                key={index}
                data-value={doc.title}
                onClick={this.handleFacetResultClick}
            >
                {doc.title}
            </div>
        );

        return (
            <div >
                <div className={isActiveClass}>
                    <div className="dropdown-trigger" onClick={this.openClicked}>
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                        <span>Mission</span>:
                        <span>{this.state.selection}</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className="input is-small" 
                                        type="text" 
                                        placeholder="Target"
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="icon is-left">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                            <hr className="dropdown-divider"/>

                            <div>
                                {searchResults}
                            </div>
                            
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
    dispatchSearchBarMissionFacetChange: (input) => dispatch(getSearchBarMissionFacetResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarMissionFacet);