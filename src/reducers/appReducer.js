const initialState = {
  searchInput: '',
  isSearching: false
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

    default:
      return state;
  }
}