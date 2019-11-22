const initialState = {
  searchInput: '',
  isSearching: false,
  searchResults: [],
  rows: 15,
  start: 0
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
    
    default:
      return state;
  }
}