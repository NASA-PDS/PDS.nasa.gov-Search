const initialState = {
  searchInput: '',
  isSearching: false,
  searchResults: [],
  rows: 15,
  start: 0,
  dataType: "data",
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
  },
  browserView: {
    instruments: [],
    latest: [],
    missions: [],
    popular: [],
    productLevelSearches: [],
    targets: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_INPUT':
      return Object.assign({}, state, {
        searchInput: action.payload
      });

    case 'SET_IS_SEARCHING':
      return Object.assign({}, state, {
        isSearching: action.payload
      });

    case 'SET_DATA_TYPE':
      return Object.assign({}, state, {
        dataType: action.payload
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
            results: action.payload,
            currentSelection: state.searchFacets.target.currentSelection
          },
          mission: state.searchFacets.mission,
          instrument: state.searchFacets.instrument
        }
      });

    case 'RENDER_SEARCH_BAR_MISSION_FACET_RESULTS':
      return Object.assign({}, state, {
        searchFacets:{
          target: state.searchFacets.target,
          mission: {
            results: action.payload,
            currentSelection: state.searchFacets.mission.currentSelection
          },
          instrument: state.searchFacets.instrument
        }
      });

    case 'RENDER_SEARCH_BAR_INSTRUMENT_FACET_RESULTS':
    return Object.assign({}, state, {
      searchFacets:{
        target: state.searchFacets.target,
        instrument: {
          results: action.payload,
          currentSelection: state.searchFacets.instrument.currentSelection
        },
        mission: state.searchFacets.mission
      }
    });

    case 'RENDER_MISSION_SECTION_CONTENT':
    return Object.assign({}, state, {
      browserView:{
        missions: action.payload,
        targets: state.browserView.targets,
        instruments: state.browserView.instruments
      }
    });

    case 'RENDER_TARGET_SECTION_CONTENT':
    return Object.assign({}, state, {
      browserView:{
        targets: action.payload,
        missions: state.browserView.missions,
        instruments: state.browserView.instruments
      }
    });

    case 'RENDER_INSTRUMENT_SECTION_CONTENT':
    return Object.assign({}, state, {
      browserView:{
        instruments: action.payload,
        missions: state.browserView.missions,
        targets: state.browserView.targets
      }
    });
    
    default:
      return state;
  }
}