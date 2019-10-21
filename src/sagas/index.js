import { all, call, put, takeEvery } from 'redux-saga/effects';

function* fetchSearchResults(){
    const endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=identifier:%22urn:nasa:pds:context:facility:observatory.mauna_kea%22';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({ type: 'RENDER_SEARCH_RESULTS', payload: data});
}

function* loadSearchResults(){
    yield takeEvery('LOAD_SEARCH_RESULTS', fetchSearchResults);
}

export default function* rootSaga(){
    yield all([
        loadSearchResults()
    ]);
}

