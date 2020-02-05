export const setSearchInput = (payload) => dispatch => {
    dispatch({
     type: 'SET_SEARCH_INPUT',
     payload
    });
}

export const setIsSearching = (payload) => dispatch => {
    dispatch({
     type: 'SET_IS_SEARCHING',
     payload
    });
}

export const setDataType = (payload) => dispatch => {
    dispatch({
     type: 'SET_DATA_TYPE',
     payload
    });
}

export const getDataSearchResults = (payload) => dispatch => {
    dispatch({
        type: 'GET_DATA_SEARCH_RESULTS',
        payload
    });
}

export const getDocumentSearchResults = (payload) => dispatch => {
    dispatch({
        type: 'GET_DOCUMENT_SEARCH_RESULTS',
        payload
    });
}

export const getContextSearchResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_CONTEXT_SEARCH_RESULTS',
        payload
    });
}

export const getSearchBarTargetFacetResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_SEARCH_BAR_TARGET_FACET_RESULTS',
        payload
    });
}

export const getSearchBarMissionFacetResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_SEARCH_BAR_MISSION_FACET_RESULTS',
        payload
    });
}

export const getSearchBarInstrumentFacetResults = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_SEARCH_BAR_INSTRUMENT_FACET_RESULTS',
        payload
    });
}

export const getMissionsSectionContent = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_MISSION_SECTION_CONTENT',
        payload
    });
}

export const getTargetsSectionContent = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_TARGET_SECTION_CONTENT',
        payload
    });
}

export const getInstrumentsSectionContent = (payload) => dispatch => {
    dispatch({
        type: 'LOAD_INSTRUMENT_SECTION_CONTENT',
        payload
    });
}

