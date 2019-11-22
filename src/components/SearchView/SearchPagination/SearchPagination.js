import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getSearchResults
} from '../../../actions/appAction';
 
class SearchInput extends Component {
    componentDidMount() {
    }

    handlePaginationButtonClick = (e) => {
        e.preventDefault();

        let newStart = (e.currentTarget.getAttribute('data-value')  - 1) * this.props.appReducer.rows;
        
        this.props.dispatchGetSearchResults({
            input: this.props.appReducer.searchInput, 
            start: newStart,
            rows: this.props.appReducer.rows
        });
    }

    render() {
        let start = 0;
        let rows = 0;
        let numFound = 0;

        start = this.props.appReducer.start;
        rows = this.props.appReducer.rows;

        if(this.props.appReducer.searchResults && this.props.appReducer.searchResults.response){
            if(this.props.appReducer.searchResults.response.numFound){
                numFound = this.props.appReducer.searchResults.response.numFound;
            }
        }

        let paginations = Math.ceil(numFound / rows);
        let centerPagination = start/rows + 1;
        
        let paginationList = [];
        let leftMostPagination = centerPagination;

        if(leftMostPagination - 1 > 0){
            leftMostPagination = leftMostPagination - 1;
        }
        if(leftMostPagination - 1 > 0){
            leftMostPagination = leftMostPagination - 1;
        }

        for(let i = 0; i < 5; i++){
            if(leftMostPagination <= paginations){
                paginationList.push(leftMostPagination);
            }
            else{
                paginationList.push(0);
            }
            leftMostPagination++;
        }

        let showFirstPagination = false;
        if(paginationList[0] > 2){
            showFirstPagination = true;
        }

        let showLastPagination = false;
        if(Math.max(...paginationList) < paginations - 2){
            showLastPagination = true;
        }

        let showLeftEllipses = false;
        if(paginationList[0] >= 3){
            showLeftEllipses = true;
        }

        let showRightEllipses = false;
        if(paginationList[paginationList.length - 1] !== 0 && paginationList[paginationList.length - 1] <= paginations - 2){
            showRightEllipses = true;
        }

        let paginationLinkClass = "pagination-link";
        let paginationIsActiveLinkClass = "pagination-link is-current";
        let currentPaginationLink = (start / rows) + 1;

        return (
            <div className="pagination is-centered" role="navigation" aria-label="pagination">
                <ul className="pagination-list">
                    {
                        showFirstPagination ? 
                            <li>
                                <span 
                                    className="pagination-link" 
                                    data-value={1}
                                    aria-label="Goto page 1" 
                                    onClick={this.handlePaginationButtonClick}>
                                        1
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        showLeftEllipses ? 
                            <li>
                                <span className="pagination-ellipsis">&hellip;</span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        paginationList[0] !== 0 ? 
                            <li>
                                <span 
                                    className={paginationList[0] === currentPaginationLink ? paginationIsActiveLinkClass : paginationLinkClass}
                                    data-value={paginationList[0]} 
                                    aria-label="Goto page {paginationList[0]}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginationList[0]}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        paginationList[1] !== 0 ? 
                            <li>
                                <span 
                                    className={paginationList[1] === currentPaginationLink ? paginationIsActiveLinkClass : paginationLinkClass}
                                    data-value={paginationList[1]} 
                                    aria-label="Goto page {paginationList[1]}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginationList[1]}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        paginationList[2] !== 0 ? 
                            <li>
                                <span 
                                    className={paginationList[2] === currentPaginationLink ? paginationIsActiveLinkClass : paginationLinkClass}
                                    data-value={paginationList[2]} 
                                    aria-label="Goto page {paginationList[2]}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginationList[2]}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        paginationList[3] !== 0 ? 
                            <li>
                                <span 
                                    className={paginationList[3] === currentPaginationLink ? paginationIsActiveLinkClass : paginationLinkClass}
                                    data-value={paginationList[3]} 
                                    aria-label="Goto page {paginationList[3]}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginationList[3]}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        paginationList[4] !== 0 ? 
                            <li>
                                <span 
                                    className={paginationList[4] === currentPaginationLink ? paginationIsActiveLinkClass : paginationLinkClass}
                                    data-value={paginationList[4]} 
                                    aria-label="Goto page {paginationList[4]}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginationList[4]}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        showRightEllipses ? 
                            <li>
                                <span className="pagination-ellipsis">&hellip;</span>
                            </li>
                            : 
                            ""   
                    }

                    {
                        showLastPagination ? 
                            <li>
                                <span 
                                    className="pagination-link" 
                                    data-value={paginations} 
                                    aria-label="Goto page {paginations}" 
                                    onClick={this.handlePaginationButtonClick}>
                                        {paginations}
                                </span>
                            </li>
                            : 
                            ""   
                    }

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchGetSearchResults: (input) => dispatch(getSearchResults(input))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);  
//export default connect(mapStateToProps, null)(SearchInput);  