const initialState = {
  searchInput: '',
  isSearching: false,
  searchResults: [],
  rows: 15,
  start: 0,
  searchFacets: {
    target: {
      results: [],
      currentSelection: ''
    },
    mission: {
      results: [],
      currentSelection: ''
    },
    instrument: {
      results: [],
      currentSelection: ''
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_INPUT':
      return Object.assign({}, state, {
        searchInput: action.payload
      });

    case 'UPDATE_IS_SEARCHING':
      return Object.assign({}, state, {
          isSearching: action.payload
      });
    
    case 'RENDER_SEARCH_RESULTS':
      return Object.assign({}, state, {
        searchResults: action.payload,
        start: action.payload.response.start
      });
    
    case 'RENDER_CONTEXT_SEARCH_RESULTS':
      return Object.assign({}, state, {
        searchContextResults: action.payload
      });

    case 'RENDER_SEARCH_BAR_TARGET_FACET_RESULTS':
      return Object.assign({}, state, {
        searchFacets:{
          target: {
            results: action.payload
          }
        }
      });

    case 'RENDER_SEARCH_BAR_MISSION_FACET_RESULTS':
      return Object.assign({}, state, {
        searchFacets:{
          mission: {
            results: action.payload
          }
        }
      });

    case 'RENDER_SEARCH_BAR_INSTRUMENT_FACET_RESULTS':
    return Object.assign({}, state, {
      searchFacets:{
        instrument: {
          results: action.payload
        }
      }
    });
    
    default:
      return state;
  }
}