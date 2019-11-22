import { all, call, put, takeLatest } from 'redux-saga/effects';

function* fetchSearchResults(action){
    console.log("fetch search results action", action);
    const searchText = action.payload.input;
    const rows = action.payload.rows;
    const start = action.payload.start;

    const endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Collection%20AND%20collection_type:Data%20AND%20text:(' + 
        searchText + 
        ')&rows=' + rows +
        '&start=' + start;

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("DATA", data);
    yield put({ type: 'RENDER_SEARCH_RESULTS', payload: data});
}

function* fetchContextSearchResults(action){
    console.log("fetch context search results action", action);
    const searchText = action.payload;

    const endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=product_class:Product_Context%20ANDtext(' + 
        searchText +
        ')&rows=3';

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("CONTEXT DATA", data);
    yield put({ type: 'RENDER_CONTEXT_SEARCH_RESULTS', payload: data});
}

function* getSearchResults(){
    yield takeLatest('LOAD_SEARCH_RESULTS', fetchSearchResults);
}

function* getContextSearchResults(){
    yield takeLatest('LOAD_CONTEXT_SEARCH_RESULTS', fetchContextSearchResults);
}

export default function* rootSaga(){
    yield all([
        getSearchResults(),
        getContextSearchResults()
    ]);
}

