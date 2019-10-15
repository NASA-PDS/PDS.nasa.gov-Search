export default (state = {}, action) => {
    switch (action.type) {
     case 'UPDATE_SEARCH_INPUT':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }