import { all, call, put, takeLatest } from 'redux-saga/effects';

function* fetchSearchResults(action){
    console.log("fetch action", action);
    const searchText = action.payload;

    const endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Collection%20AND%20collection_type:Data%20AND%20text:(' + 
        searchText + 
        ')';

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("DATA", data);
    yield put({ type: 'RENDER_SEARCH_RESULTS', payload: data});
}

function* getSearchResults(){
    yield takeLatest('LOAD_SEARCH_RESULTS', fetchSearchResults);
}

export default function* rootSaga(){
    yield all([
        getSearchResults()
    ]);
}

