export const updateSearchInput = (payload) => dispatch => {
    dispatch({
     type: 'UPDATE_SEARCH_INPUT',
     payload
    });
}

export const updateIsSearching = (payload) => dispatch => {
    dispatch({
     type: 'UPDATE_IS_SEARCHING',
     payload
    });
}

export const getSearchResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_SEARCH_RESULTS',
        payload
    });
}

export const getContextSearchResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_CONTEXT_SEARCH_RESULTS',
        payload
    });
}